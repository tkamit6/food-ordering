import mongoose from "mongoose";
import {NewUser} from '../../models/user';
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { getSession } from "next-auth/react";

export async function POST(req) {
    const session = await getSession()
    console.log(session?.user,"session")

    const body = await req.json();

    await mongoose.connect(process.env.MONGO_URI)
    console.log('db connect');
    const { email, password } = body;
    const user = await NewUser.findOne({ email })

    const hashedPassword = bcrypt.compareSync(password, user.password)

    if (!user || !hashedPassword) {
        return NextResponse.json({ msg: 'invalid credentials', }, { status: 401 });
    }
    return NextResponse.json({ msg: 'success', }, { status: 200 });

}
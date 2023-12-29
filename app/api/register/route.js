import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { NewUser } from '../../models/user';
import bcrypt from "bcrypt";

export async function POST(req) {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        const body = await req.json();
        const { email, password, ...rest } = body;

        const hashedPassword = await bcrypt.hash(password, 10)

        const createdUser = await NewUser.create({
            email: email,
            password: hashedPassword,
            rest: {...rest}
        })
        console.log(createdUser)
        return NextResponse.json({ msg: 'okay', createdUser })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ msg: ' error', error }, { status: 400 })
    }
}
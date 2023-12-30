import { NextResponse } from "next/server";
import { Category } from "../../models/category";
import mongoose from "mongoose";

export async function POST(req) {
    await mongoose.connect(process.env.MONGO_URI)

    const { name } = await req.json();
    console.log(name)
    const categoryDoc = await Category.create({ name })
    return Response.json(categoryDoc)
}

export async function GET() {
    await mongoose.connect(process.env.MONGO_URI)

    return Response.json(
        await Category.find()
    );
}

export async function PUT(req) {
    const body = await req.json()
    const { _id, name } = body;
    await Category.updateOne({ _id }, { name })

    return NextResponse.json(true)
}
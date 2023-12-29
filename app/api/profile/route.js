import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOption } from '../auth/[...nextauth]/route'
import { NewUser } from "@/models/user";

export async function PUT(req) {
    await mongoose.connect(process.env.MONGO_URI)
    const body = await req.json();

    const session = await getServerSession(authOption)
    const email = session?.user?.email;

    await NewUser.updateOne({ email }, body)
    return Response.json(true)
}
import mongoose, { mongo } from "mongoose";
import { getServerSession } from "next-auth";
import { NewUser } from "@/models/user";
import { userInfo } from "../../models/UseInfoModel";
import { authOption } from "../auth/[...nextauth]";

export async function PUT(req) {
    await mongoose.connect(process.env.MONGO_URI)
    const body = await req.json();

    const session = await getServerSession(authOption)
    const email = session?.user?.email;

    await NewUser.updateOne({ email }, body)
    return Response.json(true)
}

export async function GET() {
    mongoose.connect(process.env.MONGO_URI);
    const session = await getServerSession(authOption)
    const email = session?.user?.email;

    if (!email) {
        return Response.json({})
    }
    const user = await NewUser.findOne({ email })
    const userInfo = await userInfo.findOne({ email })
    return Response.json({ ...user, ...userInfo })
}
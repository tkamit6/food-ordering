import mongoose from "mongoose";
import NextAuth from "next-auth";
import { NewUser } from '../../../models/user';
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

export const authOption = {
  secret: process.env.NO_SECRET, 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    {
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        console.log(credentials, req)
        console.log(credentials)
        const email = credentials?.email;
        const password = credentials?.password;
        mongoose.connect(process.env.MONGODB_URI)
        const user = await NewUser.findOne({ email })
        const passwordOk = user && bcrypt.compareSync(password, user.password)
        if (passwordOk) {
          return user;
        }
        return null;
      }
    }
  ]
}
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };

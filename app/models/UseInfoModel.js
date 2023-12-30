import mongoose, { mongo } from "mongoose";
import { Schema } from "mongoose";

export const userInfoSchema = new Schema({
    email: { type: String, required: true },
    phone: { type: String },
    Street: { type: String },
    postalcode: { type: String },
    city: { type: String },
    country: { type: String },
    admin: { type: Boolean, default: false }
})
export const userInfo = mongoose.model.UserInfo || mongoose.model('UserInfo', userInfoSchema)

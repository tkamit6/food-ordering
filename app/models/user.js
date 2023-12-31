import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },

}, {
    timestamps: true,
});

export const NewUser = mongoose.models.NewUser || mongoose.model('NewUser', userSchema);

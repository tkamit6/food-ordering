import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    phone:{type: String},
    Street:{type: String},
    postalcode:{type: String},
    city:{type: String},
    country:{type: String},

}, {
    timestamps: true,
});

// userSchema.post('validate', async function (user) {
//     try {
//         const notHashedPassword = user.password;
//         user.password = await bcrypt.hash(notHashedPassword, 10);
//     } catch (error) {
//         console.error('Error hashing password:', error);
//         throw new Error('Failed to hash password');
//     }
// });

export const NewUser = mongoose.models.NewUser || mongoose.model('NewUser', userSchema);

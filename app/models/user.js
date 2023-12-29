import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: pass => pass.length >= 5,
            message: 'Password must be at least 5 characters'
        }
    }
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

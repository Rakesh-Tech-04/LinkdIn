import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true,
        required: true,
    },
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email address",
        ],
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
},
    {
        timestamps: true
    })

const User = mongoose.model("User", userSchema)
export default User
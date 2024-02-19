const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required."]
        },
        email: {
            type: String,
            required: [true, "Email is required."],
            unique: true,
            trim: true,
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                "Please enter a valid email."
            ]
        },
        password: {
            type: String,
            required: [true, "Password is required."],
            minLength: [6, "Password must contain at least 6 characters."],
            maxLength: [23, "Password cannot exceed 23 characters."]
        },
        photo: {
            type: String,
            required: [true, "Please upload an image."],
            default: "https://i.ibb.co/bvwwVgk/user-profile-icon-vector-avatar-600nw-2247726673.webp"
        }
    }, 
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema);

module.exports = User;
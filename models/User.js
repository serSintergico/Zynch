const mongoose  = require("mongoose");
const { Schema, model } = mongoose

const UserClass = require('./classes/user.js')

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
{
    timestamp: true,
    autocreate: true
})

userSchema.loadClass(UserClass)

module.exports = model("User", userSchema)
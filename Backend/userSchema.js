const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        lowercase: true,
    },
})

const User = mongoose.model("User1",userSchema);
module.exports = User;
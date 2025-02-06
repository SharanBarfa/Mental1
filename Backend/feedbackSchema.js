const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
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
    message:{
        type: String,
        required: true,
        lowercase: true,
    },
    rating:{
        type: Number,
        min: 1,
        max: 5,
        required: true
    }
})

const Feedback = mongoose.model("Feedback",feedbackSchema);
module.exports = Feedback;
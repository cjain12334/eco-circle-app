const mongoose = require("mongoose");

// Conversation Schema
const conversationModel = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // References the User model
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message", // References the Message model
    }],
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Conversation = mongoose.model("Conversation", conversationModel);

module.exports = Conversation; // Exporting the Conversation model
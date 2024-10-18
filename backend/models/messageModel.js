import mongoose from "mongoose";

// Message Schema
const messageModel = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, // Ensures senderId is required
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, // Ensures receiverId is required
    },
    message: {
        type: String,
        required: true, // Ensures message content is required
    },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

export const Message = mongoose.model("Message", messageModel); // Exporting the Message model


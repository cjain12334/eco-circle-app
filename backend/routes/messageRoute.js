import express from "express";
import { getMessage, sendMessage } from "../controllers/messageController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/send/:id").post(authMiddleware,sendMessage);
router.route("/:id").get(authMiddleware, getMessage);

export default router;
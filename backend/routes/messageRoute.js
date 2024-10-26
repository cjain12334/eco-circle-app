const express = require("express");
const { sendMessage, getMessage } = require("../controllers/messageController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.route("/send/:id").post(authMiddleware,sendMessage);
router.route("/:id").get(authMiddleware, getMessage);

module.exports = router;
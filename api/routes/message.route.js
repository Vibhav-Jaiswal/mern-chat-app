import express from "express";
import { allMessages, sendMessage } from "../controllers/message.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/:chatId", allMessages);
router.post("/", verifyToken, sendMessage);

export default router;

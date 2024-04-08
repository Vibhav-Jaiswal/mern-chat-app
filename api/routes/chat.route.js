import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { accessChat, fetchChat } from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/", verifyToken, accessChat);
router.get("/", verifyToken, fetchChat);

export default router;

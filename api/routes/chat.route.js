import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { accessChat } from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/", verifyToken, accessChat);

export default router;

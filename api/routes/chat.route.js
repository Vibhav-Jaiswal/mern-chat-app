import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { accessChat, fetchChat, createGroup } from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/", verifyToken, accessChat);
router.get("/", verifyToken, fetchChat);
router.post("/create-group", verifyToken, createGroup);

export default router;

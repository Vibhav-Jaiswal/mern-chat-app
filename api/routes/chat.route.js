import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  accessChat,
  fetchChat,
  createGroup,
  fetchGroup,
} from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/", verifyToken, accessChat);
router.get("/", verifyToken, fetchChat);
router.post("/create-group", verifyToken, createGroup);
router.post("/fetch-group", verifyToken, fetchGroup);

export default router;

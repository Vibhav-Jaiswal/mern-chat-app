import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  accessChat,
  fetchChat,
  createGroup,
  fetchGroup,
  groupExit
} from "../controllers/chat.controller.js";

const router = express.Router();

router.post("/", verifyToken, accessChat);
router.get("/", verifyToken, fetchChat);
router.post("/create-group", verifyToken, createGroup);
router.get("/fetch-group", verifyToken, fetchGroup);
router.put("/group-exit", verifyToken, groupExit);

export default router;

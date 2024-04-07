import express from "express";
import { signout, getAllUsers } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/signout/:id", verifyToken, signout);
router.get("/get-users/:id", verifyToken, getAllUsers);

export default router;

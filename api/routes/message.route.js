import express from 'express';
import {allMessages} from '../controllers/message.controller.js'

const router = express.Router();

router.get("/:chatId",allMessages);

export default router;
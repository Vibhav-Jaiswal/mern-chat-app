import express from 'express';
import { test,signup } from '../controllers/user.controller.js';
const router = express.Router();

router.get('/test',test)
router.post('/signup',signup);

export default router;
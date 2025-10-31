import express from 'express';
import { addMood, getMoods } from '../controllers/moodController.js';
import { authMiddleware } from '../middleware/auth.js';
import { moodValidator } from '../middleware/validate.js';

const router = express.Router();

router.post('/', authMiddleware, moodValidator, addMood);
router.get('/', authMiddleware, getMoods);

export default router;

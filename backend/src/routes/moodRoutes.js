import express from 'express';
import { addMood, getMoods } from '../controllers/moodController.js';
import { protect } from '../middleware/auth.js';
import { moodValidator } from '../middleware/validate.js';

const router = express.Router();

router.post('/', protect, moodValidator, addMood);
router.get('/', protect, getMoods);

export default router;

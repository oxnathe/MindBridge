import express from 'express';
import { addMood, getMoods } from '../controllers/moodController.js';
import { moodValidator } from '../middleware/validate.js';

const router = express.Router();

router.post('/', moodValidator, addMood);
router.get('/', getMoods);

export default router;

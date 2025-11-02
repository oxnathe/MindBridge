import express from 'express';
import { getWeeklyMood } from '../controllers/dashboardController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// GET /api/v1/dashboard/mood - Weekly mood history (protected)
router.get('/mood', protect, getWeeklyMood);

export default router;
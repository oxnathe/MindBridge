// routes/profileRoutes.js
import express from 'express';
import { getProfile, updateProfile } from '../controllers/profileController.js';
import { protect } from '../middleware/auth.js';
import { profileUpdateValidator } from '../middleware/validate.js';

const router = express.Router();

// GET /api/v1/profile - Get profile (protected)
router.get('/', protect, getProfile);

// PATCH /api/v1/profile - Update profile (protected)
router.patch('/', protect, profileUpdateValidator, updateProfile);

export default router;
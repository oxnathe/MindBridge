
import express from 'express';
import { getAdminDashboard } from '../controllers/adminController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// GET /api/v1/admin/dashboard
router.get('/dashboard', protect, getAdminDashboard);

// (Optional) POST /api/v1/admin/promote
// router.post('/promote', protect, promoteToAdmin);

export default router;
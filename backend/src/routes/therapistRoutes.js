
import express from 'express';
import {
  applyAsTherapist,
  getAllTherapists,
  getTherapistById,
  updateTherapist,
  removeTherapist,
  approveTherapist,
} from '../controllers/therapistController.js';
import { protect } from '../middleware/auth.js';
import { therapistApplyValidator } from '../middleware/validate.js';

const router = express.Router();


router.get('/', getAllTherapists);

router.get('/:id', getTherapistById);


router.post('/apply', protect, therapistApplyValidator, applyAsTherapist);


router.put('/:id', protect, updateTherapist);

router.patch('/approve/:id', protect, approveTherapist);


router.delete('/:id', protect, removeTherapist);

export default router;

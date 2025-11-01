import express from 'express';
import {
  applyAsTherapist,
  getAllTherapists,
  getTherapistById,
  updateTherapist,
  removeTherapist,
  approveTherapist,
} from '../controllers/therapistController.js';

const router = express.Router();

router.post('/apply', applyAsTherapist);
router.get('/', getAllTherapists);
router.get('/:id', getTherapistById);
router.put('/:id', updateTherapist);
router.patch('/approve/:id', approveTherapist);
router.delete('/:id', removeTherapist);

export default router;

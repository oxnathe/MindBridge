import express from 'express';
import { applyAsTherapist, getAllTherapists, getTherapistById, updateTherapist, removeTherapist, approveTherapist } from '../controllers/therapistController.js';

const router = express.Router();

router.post('/apply', applyAsTherapist);
router.get('/', getAllTherapists);
router.get('/:id', getTherapistById);
router.put('/:id', updateTherapist);
router.delete('/:id', removeTherapist);
router.patch('/approve/:id', approveTherapist);


export default router;

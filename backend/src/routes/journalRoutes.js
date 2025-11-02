import express from 'express';
import { body } from 'express-validator';
import { addJournalEntry, getJournalEntries } from '../controllers/journalController.js';
import { protect } from "../middleware/auth.js";


const router = express.Router();

router.post(
  '/',
  protect,
  body('content').notEmpty().withMessage('Content is required'),
  addJournalEntry
);

router.get('/', protect, getJournalEntries);

export default router;
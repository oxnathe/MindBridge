import { body } from 'express-validator';

export const moodValidator = [
  body('mood')
    .isInt({ min: 1, max: 5 })
    .withMessage('Mood must be an integer between 1 and 5'),
  body('note')
    .optional()
    .isString()
    .isLength({ max: 255 })
    .withMessage('Note must be a string up to 255 characters'),
];

import { body } from 'express-validator';



export const registerValidator = [
  body('isAnonymous').isBoolean().withMessage('isAnonymos must be true or false'),
  body('username').if(body('isAnonymous').equals('false')).notEmpty().withMessage('Username is required'),

  body('email').if(body('isAnonymous').equals('false')).isEmail().withMessage('Valid email is required'),

  body('password').if(body('isAnonymous').equals('false')).isLength().withMessage('Password must be atleast 6 characters'),
];

export const loginValidator = [
  body('email').if(body('isAnonymous').equals('false')).isEmail().withMessage('Valid email is required'),
  body('password').if(body('isAnonymous').equals('false')).isLength().withMessage('Password must be atleast 6 characters'),


]


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

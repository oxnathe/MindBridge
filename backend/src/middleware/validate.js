import { body, validationResult } from 'express-validator';



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

// Common error handler for all validators
export const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }
  next();
};





// Therapist Application Validator

export const therapistApplyValidator = [
  body('name')
    .isString()
    .trim()
    .notEmpty()
    .withMessage('Name is required'),

  body('bio')
    .optional()
    .isString()
    .withMessage('Bio must be a string'),

  body('NGO')
    .optional()
    .isString()
    .withMessage('NGO must be a string'),

  body('email')
    .optional()
    .isEmail()
    .withMessage('Invalid email format'),

  body('phone')
    .isString()
    .notEmpty()
    .matches(/^[0-9+\-() ]+$/)
    .withMessage('Phone number is required and must be valid'),

  body('specialization')
    .isString()
    .notEmpty()
    .isIn([
      'Anxiety',
      'Depression',
      'Stress Management',
      'Relationship Issues',
      'Trauma',
      'Self-Esteem',
      'Grief Counseling',
      'Career Counseling',
      'Family Therapy',
      'Addiction',
    ])
    .withMessage('Specialization must be one of the predefined categories'),

  handleValidation,
];

// Validation for profile update
export const profileUpdateValidator = [
  body('username')
    .optional()
    .isString()
    .withMessage('Username must be a string'),
  body('email')
    .optional()
    .isEmail()
    .withMessage('Email must be valid'),
  body('password')
    .optional()
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
];



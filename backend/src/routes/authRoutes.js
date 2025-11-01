import express from 'express';
const router = express.Router();
import register from '../controllers/registeControllerr.js';
import login from '../controllers/loginController.js';
import { loginValidator, registerValidator } from '../middleware/validate.js';

// Define routes
router.post('/register', registerValidator, register);
router.post('/login', loginValidator, login);

export default router;


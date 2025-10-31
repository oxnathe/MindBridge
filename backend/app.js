import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit'
import authRoutes from './src/routes/authRoutes.js';
import journalRoutes from './src/routes/journalRoutes.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import moodRoutes from './src/routes/moodRoutes.js';
import { authMiddleware } from './src/middleware/auth.js';


const app = express();

dotenv.config();
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const authLimiter = rateLimit({
    windowMs: 15 * 60 * 6000,
    max: 20,
    message: 'Too many request,please trt again later'
});
app.use('/api/v1/auth', authLimiter);

//route
app.use('/api/v1/auth', authRoutes); // for login &register routes
app.use('/api/v1/auth', authRoutes); //routes
app.use('/api/v1/mood', moodRoutes);
app.use('/api/v1/journal', authMiddleware, journalRoutes);


//error Handler
app.use(errorHandler);  // Error handler (must be last)

export default app;

// backend/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

import authRoutes from './src/routes/authRoutes.js';
import journalRoutes from './src/routes/journalRoutes.js';
import moodRoutes from './src/routes/moodRoutes.js';
import therapistRoutes from './src/routes/therapistRoutes.js';
import { protect } from './src/middleware/auth.js';
import { notFound, errorHandler } from './src/middleware/errorHandler.js';
import dashboardRoutes from './src/routes/dashboardRoutes.js';
import profileRoutes from './src/routes/profileRoutes.js';
import adminRoutes from './src/routes/adminRoutes.js';

dotenv.config();

const app = express();

// Security & Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Rate Limiting
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: 'Too many requests, please try again later.',
});
app.use('/api/v1/auth', authLimiter);

// Base Route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'MindBridge API is running successfully',
  });
});

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/mood', moodRoutes);
app.use('/api/v1/journal', protect, journalRoutes);
app.use('/api/v1/therapists', therapistRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/admin', adminRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

export default app;

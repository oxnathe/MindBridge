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

import { connectDB } from './src/config/db.js';
import { authMiddleware } from './src/middleware/auth.js';
import { notFound, errorHandler } from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();

//  Security & Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 20, 
  message: 'Too many requests, please try again later.',
});
app.use('/api/v1/auth', authLimiter);

//  Routes
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'MindBridge API is running successfully ',
  });
});

app.use('/api/v1/auth', authRoutes); // login/register routes
app.use('/api/v1/mood', moodRoutes);
app.use('/api/v1/journal', authMiddleware, journalRoutes);
app.use('/api/v1/therapists', therapistRoutes);

// Error Handling Middleware
app.use(notFound); // Handle 404 routes
app.use(errorHandler); // Centralized error handler

//  Start Server
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();
    console.log('Database connected successfully');

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Database connection failed:', err.message);
  }
};

startServer();

export default app;

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import journalRoutes from './routes/journalRoutes.js';
import therapistRoutes from './routes/therapistRoutes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import { connectDB } from './config/db.js';
import moodRoutes from './routes/moodRoutes.js';
import authMiddleware from './middleware/auth.js';


const app = express();

dotenv.config();
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRoutes); //routes
app.use('/api/v1/mood', moodRoutes);
app.use('/api/v1/journal', authMiddleware, journalRoutes);
app.use('/api/v1/therapists', therapistRoutes);



app.use(notFound);      // 404 handler
app.use(errorHandler);  // Error handler (must be last)

const PORT = process.env.PORT || 3000;

// Test database connection and start server

const startServer = async () => {
    try {
        await connectDB();
        console.log('Database connected successfully');

        app.listen(PORT, '0.0.0.0' , () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

startServer();

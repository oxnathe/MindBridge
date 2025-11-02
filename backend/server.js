
import dotenv from 'dotenv';
import app from './app.js';
import { connectDB } from './src/config/db.js';

dotenv.config();

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
    process.exit(1);
  }
};

startServer();

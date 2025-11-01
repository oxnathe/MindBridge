import app from "./app.js";
import { connectDB } from "./src/config/db.js";

const PORT = process.env.PORT || 3000;

// Test database connection and start server

const startServer = async () => {
    try {
        await connectDB();
        console.log('Database connected successfully');

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}

startServer();
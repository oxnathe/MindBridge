import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME || 'mindbridge',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '',


    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '3306',
        dialect: 'mysql'
    }
);


export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection is successfully.');
        await sequelize.sync({ alter: true });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
} 

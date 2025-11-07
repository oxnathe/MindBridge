import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DATABASE_URL,
    
    // process.env.DB_NAME || 'mindbridge',
    // process.env.DB_USER || '',
    // process.env.DB_PASSWORD || '',


    {
        // host: process.env.DB_HOST || '',
        // port: process.env.DB_PORT || '',
        dialect: 'postgres',
        dialectOptions:{
            ssl:{
                require:true,
                rejectUnauthorized:false
            }
        },
        logging:false

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

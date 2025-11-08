import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const isProduction = process.env.NODE_ENV === "production";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: "postgres",
    logging: false,
    dialectOptions: isProduction
      ? {
          ssl: {
            require: true,
            rejectUnauthorized: false, // Render requires this for SSL
          },
        }
      : false,
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful.");
    await sequelize.sync({ alter: true }); // adjust tables
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

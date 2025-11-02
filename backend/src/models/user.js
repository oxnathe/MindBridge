import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: { msg: "Email must be valid" },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM("user", "therapist", "admin"),
      defaultValue: "user",
    },
    isAnonymous: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false, 
  }
);

export default User;

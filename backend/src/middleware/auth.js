// src/middleware/auth.js
import jwt from "jsonwebtoken";
import User from "../models/user.js"; 

const JWT_SECRET = process.env.JWT_SECRET;

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access denied. No token provided.",
      });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    //  Fetch full user details from DB
    const user = await User.findByPk(decoded.id, {
      attributes: ["id", "username", "email", "role"],
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    req.user = user; 
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    res.status(401).json({
      success: false,
      message: "Access denied. Invalid or expired token.",
    });
  }
};

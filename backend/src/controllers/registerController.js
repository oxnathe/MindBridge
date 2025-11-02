import User from "../models/user.js";
import { validationResult } from "express-validator";
import { hashPassword } from "../utils/hashPass.js";
import { createToken } from "../utils/token.js";

const register = async (req, res, next) => {
  try {
    // 1. Validate request input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // 2. Extract body
    const { username, email, password, isAnonymous = false } = req.body;

    // 3. Handle non-anonymous users
    if (!isAnonymous) {
      if (!username || !email || !password) {
        return res.status(400).json({
          success: false,
          message: "Username, email, and password are required",
        });
      }

      // Check for existing email
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: "User already exists with this email",
        });
      }
    }

    // 4. Hash password only for non-anonymous users
    const hashedPassword =
      !isAnonymous && password ? await hashPassword(password, 10) : null;

    // 5. Create new user
    const newUser = await User.create({
      username: isAnonymous ? null : username,
      email: isAnonymous ? null : email,
      password: hashedPassword,
      isAnonymous,
      role: "user",
    });

    // 6. Generate token for non-anonymous users only
    const token = !isAnonymous
      ? createToken({
          id: newUser.id,
          email: newUser.email,
          role: newUser.role,
        })
      : null;

    // 7. Respond
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        isAnonymous: newUser.isAnonymous,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default register;

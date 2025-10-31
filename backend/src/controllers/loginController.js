import User from "../models/user.js";
import bcrypt from 'bcryptjs';
import { validationResult } from "express-validator";
import { createToken } from "../utils/token.js";


const login = async (req, res, next) => {
    try {

        // check for validation errors
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.stats(400).json({ errors: error.array() })
        }

        //  Get email and password from request body
        const { email, password } = req.body;

        //  Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        //  Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password'
            });
        }

        //  Generate JWT token
        const token = createToken({
            id: user.id,
            email: user.email,
            role: user.role
        });

        // 5. Send success response
        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        next(error);
    }
};

export default login;

import User from "../models/user.js";
import { validationResult } from "express-validator";
import { hashPassword } from "../utils/hashPass.js";
import { createToken } from '../utils/token.js';



const register = async (req, res, next) => {
    try {
        // check for validation errors
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        //  Get data from request body
        const { username, email, password, isAnonymous = false } = req.body;
        if (!isAnonymous) {

            //  Check if user already exists
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(409).json({
                    success: false,
                    message: 'User already exists with this email'
                });
            }
        }


        //  Hash the password
        let hashedPassword = null;
        if (!isAnonymous && password) {
            hashedPassword = await hashPassword(password, 10);
        }


        //  Create new user
        const newUser = await User.create({
            username: isAnonymous ? null : username,
            email: isAnonymous ? null : email,
            password: hashedPassword,
            isAnonymous: isAnonymous || false,
            role: 'user'
        });

        //  Generate JWT token
        const token = createToken({
            id: newUser.id,
            email: newUser.email,
            role: newUser.role
        });

        //  Send success response
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            token,
            user: {
                id: newUser.id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role
            }
        });

    } catch (error) {
        next(error);
    }
};

export default register;
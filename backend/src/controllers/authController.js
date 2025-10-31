
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET;

//helper to create JWT
const createToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            role: user.role,
            isAnonymous: user.isAnonymous
        },
        JWT_SECRET,
        { expiresIn: '7d' }
    );
}
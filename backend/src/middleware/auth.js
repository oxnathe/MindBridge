import jwt from 'jsonwebtoken';



const JWT_SECRET = process.env.JWT_SECRET
export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log('Token received:', token);
    console.log('JWT_SECRET:', JWT_SECRET);


    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Access denied. No token provided.'
        });
    }

    try {

        const decoded = jwt.verifyToken(token, JWT_SECRET);
        req.user = decoded;
        next();


    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Access denied. Invalid token.'
        })
    }

}
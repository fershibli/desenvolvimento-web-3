import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const AuthorizeMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    const secret = process.env.AUTH_SECRET || "s3nh4S3gur4";
    jwt.verify(authorization || "", secret, (err) => {
        if (err) {
            return res.status(401).json({ message: "Invalid Token" });
        }
        next();
    });
}
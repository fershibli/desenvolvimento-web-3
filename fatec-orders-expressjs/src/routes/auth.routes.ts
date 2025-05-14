import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const AuthRouter = express.Router();

AuthRouter.post("/", async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        const token = jwt.sign({ username }, "s3nh4S3gur4")
        res.status(200).json({ token });
    }
    res.status(401).send();
})

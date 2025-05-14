import express, { Request, Response, NextFunction } from 'express';

export const AuthRouter = express.Router();

AuthRouter.post("/", async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        res.status(200).send();
    }
    res.status(401).send();
})

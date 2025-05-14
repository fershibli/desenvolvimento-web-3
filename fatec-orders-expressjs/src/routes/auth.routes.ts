import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin") {
        res.status(200).send();
    } else {
        res.status(401).send();
    }
})
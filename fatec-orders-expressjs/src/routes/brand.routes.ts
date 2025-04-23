import express from 'express';
import { Request, Response } from 'express';
import { listAll } from '../controllers/brand.controller';

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const allBrands = await listAll();
    res.status(200).json(allBrands);
})

export default router;
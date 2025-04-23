import express from 'express';
import { Request, Response } from 'express';
import { create, listAll } from '../controllers/brand.controller';

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
    const allBrands = await listAll();
    res.status(200).json(allBrands);
})

router.post("/", async (req: Request, res: Response) => {
    const brand = req.body;
    const newBrand = await create(brand.description);
    res.status(201).json(newBrand);
})

export default router;
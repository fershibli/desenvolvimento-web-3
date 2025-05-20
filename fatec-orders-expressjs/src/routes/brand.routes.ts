import express, { Request, Response, NextFunction } from 'express';
import { create, listAll } from '../controllers/brand.controller';
import { AuthorizeMiddleware } from '../middlewares/authorize.middleware';

const router = express.Router();

router.use(AuthorizeMiddleware);

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log("LOGGED");
    next();
}

const createBrandMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Descrição: " + req.body.description);
    next();
}

router.use(logger);

router.get("/", async (req: Request, res: Response) => {
    const allBrands = await listAll();
    res.status(200).json(allBrands);
})

router.post("/", createBrandMiddleware, async (req: Request, res: Response) => {
    const { description } = req.body;
    const newBrand = await create(description);
    res.status(201).json(newBrand);
})

export default router;
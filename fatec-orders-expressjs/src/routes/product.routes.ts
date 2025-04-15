import express from 'express';
import { Request, Response } from 'express';
import { IProductFilterOptions } from '../interfaces/IProduct';

const router = express.Router();


const products = [
    {
        id: 1,
        name: "Feijão Carioca",
        brand: "Broto Legal",
        barCode: "98493874849278374989478",
        supplier: "Rede de Distribuição Ltda",
        stockId: 98,
        price: 8.79,
        weight: 1,
        measureUnit: "kg",
    },
    {
        id: 2,
        name: "Arroz",
        brand: "Tio João",
        barcode: "98475834587947857947984",
        supplier: "Rede de Distribuição Ltda",
        stockId: 65,
        price: 29.99,
        weight: 5,
        measureUnit: "kg",
    },
];

// Define método Http Get que responde no path /product/:id
router.get("/:id", (req: Request, res: Response) => {
    const product = products.find((product) => {
        return product.id === Number(req.params.id);
    });

    if (!product) {
        res.status(404).send();
        return;
    }

    // Responde requisição com o produto encontrado
    res.status(200).json(product);
});

// Define método Http Get que responde no path /product
router.get("/", (req: Request, res: Response) => {
    const productFilter = req.query as unknown as IProductFilterOptions;

    const {
        name: nameFilter,
        brand: brandFilter,
        supplier: supplierFilter,
        stockId: stockIdFilter
    } = productFilter;

    const foundProducts = products.filter(({ name, brand, supplier, stockId }) => {
        return (
            (!nameFilter || name.toUpperCase().includes(nameFilter.toUpperCase())) &&
            (!brandFilter || brand.toUpperCase().includes(brandFilter.toUpperCase())) &&
            (!supplierFilter || supplier.toUpperCase().includes(supplierFilter.toUpperCase())) &&
            (!stockIdFilter || stockId === Number(stockIdFilter))
        );
    }
    );

    res.status(200).json(foundProducts);
});

router.post("/",
    (req: Request, res: Response) => {
        const product = req.body;
        products.push(product);

        res.status(201).send();
    });

router.put("/:id",
    (req: Request, res: Response) => {
        const productId = Number(req.params.id);
        const productIndex = products.findIndex((product) => product.id === productId);

        if (productIndex === -1) {
            res.status(404).send();
            return;
        }

        products[productIndex] = req.body;

        res.status(200).send();
    }
);

router.delete("/:id",
    (req: Request, res: Response) => {
        const productId = Number(req.params.id);
        const productIndex = products.findIndex((product) => product.id === productId);

        if (productIndex === -1) {
            res.status(404).send();
            return;
        }

        products.splice(productIndex, 1);

        res.status(204).send();
    }
);

export default router;
import { Request, Response } from "express";
import { IProductFilterOptions } from "./IProduct";

// Importação da biblioteca express
const express = require("express");

// Criação da aplicação
const app = express();

// Configura aplicação para receber json no body das requisições
app.use(express.json());

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
app.get("/product/:id", (req: Request, res: Response) => {
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
app.get("/product", (req: Request, res: Response) => {
  const productFilter: IProductFilterOptions = req.query as any as IProductFilterOptions;

  const { name, brand, supplier, stockId } = productFilter;

  const filteredProducts = products.filter((product) => {
    return (
      (name ? product.name.includes(name) : true) &&
      (brand ? product.brand.includes(brand) : true) &&
      (supplier ? product.supplier.includes(supplier) : true) &&
      (stockId ? product.stockId === Number(stockId) : true)
    );
  });

  res.status(200).json(filteredProducts);
});

app.post("/product", (req: Request, res: Response) => {
  const product = req.body;
  products.push(product);

  res.status(201).send();
});

// Inicia aplicação na Porta 3000
app.listen(3000, () => {
  console.log("Servidor executando na Porta 3000");
});

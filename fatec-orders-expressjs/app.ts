import express from "express";
import ProductRouter from "./src/routes/product.routes";
import BrandRouter from "./src/routes/brand.routes";
import { AuthRouter } from "./src/routes/auth.routes";

// Criação da aplicação
const app = express();

// Configura aplicação para receber json no body das requisições
app.use(express.json());

// Routes
app.use("/product", ProductRouter);
app.use("/brand", BrandRouter);
app.use("/auth", AuthRouter);

// Inicia aplicação na Porta 3000
app.listen(3000, () => {
  console.log("Servidor executando na Porta 3000");
});

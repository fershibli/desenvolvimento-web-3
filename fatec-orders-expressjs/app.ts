import express from "express";
import ProductRoutes from "./src/routes/product.routes";
import BrandRoutes from "./src/routes/brand.routes";

// Criação da aplicação
const app = express();

// Configura aplicação para receber json no body das requisições
app.use(express.json());

// Routes
app.use("/product", ProductRoutes);
app.use("/brand", BrandRoutes);

// Inicia aplicação na Porta 3000
app.listen(3000, () => {
  console.log("Servidor executando na Porta 3000");
});

import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import { router } from "./routes";

import "./database"
  
const app = express();
// HABILITAR JSON
app.use(express.json());
// HABILITAR ROTAS
app.use(router);
// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));
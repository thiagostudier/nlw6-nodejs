import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import cors from "cors";

import "./database"
  
const app = express();
// HABILITAR CORS
app.use(cors());
// HABILITAR JSON
app.use(express.json());
// HABILITAR ROTAS
app.use(router);
// MIDDLEWARE DE ERRO
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof Error){
    return response.status(400).json({
      error: err.message
    })
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));
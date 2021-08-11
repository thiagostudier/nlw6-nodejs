import { Request, Response, NextFunction } from "express";

export function ensureAdmin(request: Request, response: Response, next: NextFunction){
  // VERIFICAR SE USUÁRIO É ADMIN
  const admin = true;
  if(admin){
    return next();
  }
  // SE NÃO FOR ADMIN
  return response.status(401).json({
    error: "Unauthorized"
  });

}
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
  // RECEBER TOKEN
  const authToken = request.headers.authorization;
  // VALIDAR SE TOKEN EXISTE
  if(!authToken){
    return response.status(401).end();
  }
  //TIRAR O "BEARER" DO TOKEN
  const [, token] = authToken.split(" ");
  // VALIDAR SE TOKEN É VÁLIDO
  try {
    // RECUPERAR INFORMAÇÃO DO USUÁRIO
    const { sub } = verify(token, "107811f1ffc7ee3b816b136c71f54ecb") as IPayload;
    request.user_id = sub;
  } catch (error) {
    return response.status(401).end();
  }
  return next();
}
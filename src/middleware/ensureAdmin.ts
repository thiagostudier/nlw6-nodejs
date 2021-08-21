import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
  const { user_id } = request;
  // PEGAR REPOSITÓRIO DOS USUÁRIOS
  const usersRepositories = getCustomRepository(UsersRepositories);
  // PEGAR USUARIO
  const { admin } = await usersRepositories.findOne(user_id);
  // VERIFICAR SE USUÁRIO É ADMIN
  if(admin){
    return next();
  }
  // SE NÃO FOR ADMIN
  return response.status(401).json({
    error: "Unauthorized"
  });

}
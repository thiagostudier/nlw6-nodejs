import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  // CONTROLLER FICA RESPONSAVEL POR PEGAR A REQUISIÇÃO E ENVIAR PARA O SERVER
  async handle(request: Request, response: Response){
    const { name, email, admin, password } = request.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({name, email, admin, password});
    return response.json(user);  
  }
}

export { CreateUserController };
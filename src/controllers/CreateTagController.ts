import { Request, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {

  async handle(request: Request, response: Response) {
    // PEGAR VARIÁVEL DO BODY
    const { name } = request.body;
    // CRIAR SERVIÇO
    const createTagService = new CreateTagService();
    const tag = await createTagService.execute(name);

    return response.json(tag);
  }

}

export { CreateTagController }
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {

  async execute(name: string){
    const tagsRepositories = getCustomRepository(TagsRepositories);
    // VALIDAR SE EXISTE NOME
    if(!name){
      throw new Error("Incorrect name!");
    }
    // SE TAG JÁ EXISTE -> SELECT * FROM TAG WHERE NAME = 'name'
    const tagAltereadyExists = await tagsRepositories.findOne({
      name
    });
    if(tagAltereadyExists){
      throw new Error("Tag already exists!");
    }
    // CRIAR TAG
    const tag = tagsRepositories.create({
      name
    });
    // SALVAR
    await tagsRepositories.save(tag);

    return tag;

  }

}

export { CreateTagService }
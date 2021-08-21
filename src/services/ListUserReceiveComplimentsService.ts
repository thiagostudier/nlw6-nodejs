import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {

  async execute(user_id: string){
    // PEGAR REPOSITÓRIO DOS COMPLIMENTS
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    // PEGAR OS COMPLIMENTS RECEBIDOS PELO USUÁRIO
    const compliments = await complimentsRepositories.find({
      where: {
        user_receiver: user_id
      },
      relations: ["userSender", "userReceiver", "tag"]
    });
    return compliments;
  }

}

export { ListUserReceiveComplimentsService }
import { getCustomRepository, LessThanOrEqual } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {

    async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const tagsRepositories = getCustomRepository(TagsRepositories);
        const usersRepositories = getCustomRepository(UsersRepositories);
        // PEGAR TAG
        const tagExists = await tagsRepositories.findOne(tag_id);
        if(!tagExists){
            throw new Error("Tag does not exists!");
        }
        // PEGAR USER RECEIVER
        const userReceiverExists = await usersRepositories.findOne(user_receiver);
        if(!userReceiverExists){
            throw new Error("User Receiver does not exists!");
        }
        // VERIFICAR SE OS USUÁRIOS SÃO O MESMO
        if(user_sender == user_receiver){
            throw new Error("Incorrect User Receiver!");
        }
        // CRIAR COMPLIMENT
        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });
        // SALVAR REGISTRO
        await complimentsRepositories.save(compliment);

        return compliment;
    }

}

export { CreateComplimentService }
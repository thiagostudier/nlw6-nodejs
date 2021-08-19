import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);
        // VERIFICAR SE E-MAIL EXISTE
        const user = await usersRepositories.findOne({
            email
        });
        if(!user){
            throw new Error("Email/Password incorrect");
        }
        // VERIFICAR SE SENHA ESTÁ CORRETA
        const passwordMath = await compare(password, user.password);
        if(!passwordMath) {
            throw new Error("Email/Password incorrect");
        }
        // GERAR TOKEN
        const token = sign({
            email: user.email
        }, "107811f1ffc7ee3b816b136c71f54ecb", {
            subject: user.id,
            expiresIn: "1d"
        });
    }
}

export { AuthenticateUserService }
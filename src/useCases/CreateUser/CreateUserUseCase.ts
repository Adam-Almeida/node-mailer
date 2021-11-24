import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

class CreateUserUseCase{
    constructor(
      private userRepository: IUserRepository,
      private mailProvider: IMailProvider  
    ){};

    async execute(data: ICreateUserDTO){
      const userAlreadyExists = this.userRepository.findByEmail(data.email);

      if(!userAlreadyExists){
        throw new Error("User Already Exists.")
      }

      const user = new User(data);

      await this.userRepository.save(user);

      await this.mailProvider.sendMail({
        to:{
          name: data.name,
          email: data.email
        },
        from:{
          name: "Adam Almeida",
          email: "adam@adamalmeida.com"
        },
        subject: "Teste de Email",
        body: "Teste de envio de email via app."
      })
  }
}

export { CreateUserUseCase };
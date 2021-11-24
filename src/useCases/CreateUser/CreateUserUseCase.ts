import { IUserRepository } from "../../repositories/IUserRepository";

class CreateUserUseCase{
    constructor(private userRepository: IUserRepository){};

    async execute(){
      this.userRepository.findByEmail();

  }

}

export { CreateUserUseCase };
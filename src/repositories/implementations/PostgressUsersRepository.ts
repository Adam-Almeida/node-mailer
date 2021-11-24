import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class PostgressUsersRepository implements IUserRepository{

  private userRepository: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.userRepository.find(user => user.email === email);   
    return user;
  }

  async save(user: User): Promise<void> {
    this.userRepository.push(user);
  }
    
}

export { PostgressUsersRepository };
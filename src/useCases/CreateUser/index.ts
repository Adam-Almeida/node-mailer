import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgressUsersRepository } from "../../repositories/implementations/PostgressUsersRepository";
import { CreateUserController } from "./CreateUserControler";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgressUsersRepository = new PostgressUsersRepository();
const mailTrapProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgressUsersRepository,
  mailTrapProvider);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const route = Router();

route.post("/users", (request, response)=>{
  return createUserController.handle(request, response)
})

export { route };
import { Router } from "express";

const route = Router();

route.get("/", (request, response)=>{
  return response.status(200).send();
})

export { route };
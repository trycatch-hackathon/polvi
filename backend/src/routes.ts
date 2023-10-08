import { occurrenceController } from "./controller/occurrence";
import { postController } from "./controller/post";
import { userController } from "./controller/user";
import { Router } from 'express'

const routes = Router()

routes.post(`/signup`, userController.signup);
routes.get(`/login`, userController.login);
routes.get(`/occurrence/find-all`, occurrenceController.findAll);
routes.post(`/create-post`, postController.createPost);
routes.post(`/create-occurrence`, occurrenceController.createOne);


export default routes;
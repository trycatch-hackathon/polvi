import { occurrenceController } from "./controller/occurrence";
import { postController } from "./controller/post";
import { userController } from "./controller/user";
import { Router } from 'express'

const routes = Router()

routes.post(`/user`, userController.createOne);
routes.get(`/user/find-many`, userController.findMany);
routes.get(`/user/find-unique`, userController.findUnique);
routes.get(`/user/find-all`, userController.findAll);

routes.post(`/occurrence`, occurrenceController.createOne);
routes.get(`/occurrence/find-many`, occurrenceController.findMany);
routes.get(`/occurrence/find-unique`, occurrenceController.findUnique);
routes.get(`/occurrence/find-all`, occurrenceController.findAll);

routes.post(`/post`, postController.createOne);
routes.get(`/post/find-many`, postController.findMany);
routes.get(`/post/find-unique`, postController.findUnique);
routes.get(`/post/find-all`, postController.findAll);

export default routes;
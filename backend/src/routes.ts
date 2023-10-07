import { OccurrenceController } from "./controller/occurrence";
import { PostController } from "./controller/post";
import { UserController } from "./controller/user";
import express from 'express'

const routes = express.Router()

const userController = new UserController();
const occurenceController = new OccurrenceController();
const postController = new PostController();

// USER
routes.post(`/user`, userController.createOne);
routes.get(`/user/find-many`, userController.findMany);
routes.get(`/user/find-unique`, userController.findUnique);

// OCCURRENCE
routes.post(`/occurrence`, occurenceController.createOne);
routes.get(`/occurrence/find-many`, occurenceController.findMany);
routes.get(`/occurrence/find-unique`, occurenceController.findUnique);

// POST
routes.post(`/post`, postController.createOne);
routes.get(`/post/find-many`, postController.findMany);
routes.get(`/post/find-unique`, postController.findUnique);

export default routes;
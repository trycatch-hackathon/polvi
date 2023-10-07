import { app } from "..";
import { OccurrenceController } from "./controller/occurrence";
import { PostController } from "./controller/post";
import { UserController } from "./controller/user";

const routes = app;

const userController = new UserController();
const occurenceController = new OccurrenceController();
const postControlet = new PostController();

app.post(`/user`, userController.createOne);
app.get(`/user/find-many`, userController.findMany);
app.post(`/user/find-unique`, userController.findUnique);

app.post(`/occurrence`, occurenceController.createOne);
app.get(`/occurrence/find-many`, occurenceController.findMany);
app.post(`/occurrence/find-unique`, occurenceController.findUnique);

app.post(`/post`, postControlet.createOne);
app.get(`/post/find-many`, postControlet.findMany);
app.post(`/post/find-unique`, postControlet.findUnique);

export default routes;

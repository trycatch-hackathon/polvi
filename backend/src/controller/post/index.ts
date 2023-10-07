import { PostService } from "../../service/post";
import { UserService } from "../../service/user";
import { BaseController } from "../@shared";

export class PostController extends BaseController {
  constructor() {
    const userService = new PostService();
    super(userService);
  }
}

import { PostService } from "../../service/post";
import { BaseController } from "../@shared";

export class PostController extends BaseController {
  constructor() {
    const postService = new PostService();
    super(postService);
  }
}

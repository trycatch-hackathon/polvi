import { UserService } from "../../service/user";
import { BaseController } from "../@shared";

export class UserController extends BaseController {
  constructor() {
    const userService = new UserService();
    super(userService);
  }
}

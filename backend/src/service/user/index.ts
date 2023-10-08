import { UserRepository } from "../../repository/user";

class UserService {
  repository = new UserRepository();

  async login(data: any) {
    const result = await this.repository.createOne(data);
    return result;
  }

  async signup(query: any) {
    const result = await this.repository.findUnique(query);
    return result;
  }
}

export const userService = new UserService()
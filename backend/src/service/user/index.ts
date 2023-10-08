import { UserRepository } from "../../repository/user";

class UserService {
  repository = new UserRepository();

  async login(query: any) {
    const result = await this.repository.findUnique(query);
    return result;
  }

  async signup(data: any) {
    const result = await this.repository.createOne(data);
    return result;
  }
}

export const userService = new UserService()
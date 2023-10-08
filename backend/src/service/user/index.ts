import path from "path";
import { UserRepository } from "../../repository/user";
import { Storage } from "@google-cloud/storage";
import Multer  from "multer"
import { format } from 'util'

class UserService {
  repository = new UserRepository();

  async login(data: any) {
    const result = await this.repository.createOne(data);
    return result;
  }

  async findUnique(query: any) {
    const result = await this.repository.findUnique(query);
    return result;
  }

  async signup(data: any) {
    const result = await this.repository.createOne(data);
    return result;
  }
}

export const userService = new UserService()
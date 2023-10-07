import { PostRepository } from "../../repository/post";
import { UserRepository } from "../../repository/user";

export class PostService {
  repository = new PostRepository();

  async createOne(data: any) {
    const result = await this.repository.createOne(data);
    return result;
  }

  async findUnique(query: any) {
    const result = await this.repository.findUnique(query);
    return result;
  }

  async findMany(query: any) {
    const result = await this.repository.findMany(query);
    return result;
  }
}

import { OccourrenceRepository } from "../../repository/occourrence";

class OccurenceService {
  repository = new OccourrenceRepository();

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

  async findAll() {
    const result = await this.repository.findAll();
    return result;
  }
}

export const occurenceService = new OccurenceService()
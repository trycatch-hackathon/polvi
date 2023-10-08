import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../..";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class PostRepository {
  prismaClient: any;

  constructor() {
    this.prismaClient = prisma;
  }

  async createOne(data: any) {
    const result = await prisma.post.create({
      data,
    });
    return result;
  }

  async findUnique(query: any) {
    const result = await prisma.post.findUnique({
      where: query,
    });
    return result;
  }

  async findMany(query: any) {
    const result = await prisma.post.findMany({
      where: query,
    });
    return result;
  }

  async findAll() {
    const result = await prisma.post.findMany();

    return result;
  }
}
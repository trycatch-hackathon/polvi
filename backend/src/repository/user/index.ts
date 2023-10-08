import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../..";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class UserRepository {
  prismaClient: any;

  constructor() {
    this.prismaClient = prisma;
  }

  async createOne(data: any) {
    const result = await prisma.user.create({
      data,
    });
    return result;
  }

  async findUnique(query: any) {
    const result = await prisma.user.findUnique({
      where: query,
    });
    return result;
  }

  async findMany(query: any) {
    const result = await prisma.user.findMany({
      where: query,
    });

    return result;
  }

  async findAll() {
    const result = await prisma.user.findMany();

    return result;
  }
}
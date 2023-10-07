import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../..";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class OccourrenceRepository {
  prismaClient: any;

  constructor() {
    this.prismaClient = prisma;
  }

  async createOne(data: any) {
    const result = await prisma.occurrence.create({
      data,
    });
    return result;
  }

  async findUnique(query: any) {
    const result = await prisma.occurrence.findUnique({
      where: query,
    });

    return result;
  }

  async findMany(query: any) {
    const result = await prisma.occurrence.findMany({
      where: query,
    });
    return result;
  }
}

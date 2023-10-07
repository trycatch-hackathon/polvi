import { Request, Response } from "express";

export class BaseController {
  service: any;

  constructor(service: any) {
    console.log("🚀 ~ file: index.ts:7 ~ BaseController ~ constructor ~ service:", service)
    this.service = service;
  }

  async createOne(req: Request<any>, res: Response<any>) {
    
    const { data } = req.body;
    console.log(
      "🚀 ~ file: index.ts:12 ~ BaseController ~ createOne ~ data:",
      data,
      );
      
      await this.service.createOne(data);
      
      res.status(202).send();
  }

  async findUnique(req: Request<any>, res: Response<any>) {
    const { query } = req.body;
    console.log(
      "🚀 ~ file: index.ts:21 ~ BaseController ~ findUnique ~ query:",
      query,
    );

    const result = await this.service.findUnique(query);
    console.log(
      "🚀 ~ file: index.ts:26 ~ BaseController ~ findUnique ~ result:",
      result,
    );

    res.status(200).send(result);
  }

  async findMany(req: Request<any>, res: Response<any>) {
    const { query } = req.body;
    console.log(
      "🚀 ~ file: index.ts:32 ~ BaseController ~ findMany ~ query:",
      query,
    );

    const result = await this.service.findMany(query);
    console.log(
      "🚀 ~ file: index.ts:37 ~ BaseController ~ findMany ~ result:",
      result,
    );

    res.status(200).send(result);
  }
}

import { Request, Response } from "express";
import { occurenceService } from "../../service/occurrence";

export class OccurrenceController {

  async createOne(req: Request<any>, res: Response<any>) {
    const { data } = req.body;
      
    const result = await occurenceService.createOne(data);
    
    res.status(202).send(result);
  }
  
  async findUnique(req: Request<any>, res: Response<any>) {
    const { query } = req.body;
  
  
    const result = await occurenceService.findMany(query);

  
    res.status(200).send(result);
  }
  
  async findMany(req: Request<any>, res: Response<any>) {
    const { query } = req.body;
  
    const result = await occurenceService.findMany(query);
 
  
    res.status(200).send(result);
  }
}

export const occurrenceController = new OccurrenceController()


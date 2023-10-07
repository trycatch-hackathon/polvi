import { Request, Response } from "express";
import { userService } from "../../service/user";

export class PostController {

  async createOne(req: Request<any>, res: Response<any>) {
    const { data } = req.body;
      
    const result = await userService.createOne(data);
    
    res.status(202).send(result);
  }
  
  async findUnique(req: Request<any>, res: Response<any>) {
    const { query } = req.body;
  
  
    const result = await userService.findMany(query);

  
    res.status(200).send(result);
  }
  
  async findMany(req: Request<any>, res: Response<any>) {
    const { query } = req.body;
  
    const result = await userService.findMany(query);
 
  
    res.status(200).send(result);
  }
}

export const postController = new PostController()


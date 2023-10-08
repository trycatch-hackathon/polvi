import { Request, Response } from "express";
import { postService } from "../../service/post";

export class PostController {

  async createPost(req: Request<any>, res: Response<any>) {
    const { data } = req.body;
      
    const result = await postService.createPost(data);
    
    res.status(202).send(result);
  }
  
  async findUnique(req: Request<any>, res: Response<any>) {
    const { query } = req.body;
  
  
    const result = await postService.findMany(query);

  
    res.status(200).send(result);
  }
  
  async findMany(req: Request<any>, res: Response<any>) {
    const { query } = req.body;
  
    const result = await postService.findMany(query);
 
  
    res.status(200).send(result);
  }

  async findAll(req: Request<any>, res: Response<any>) {
  
    const result = await postService.findAll();
  
    res.status(200).send(result);
  }
}

export const postController = new PostController()


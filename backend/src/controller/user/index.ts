import { Request, Response } from "express";
import { userService } from "../../service/user";

export class UserController {

  async createOne(req: Request<any>, res: Response<any>) {
    const { data } = req.body;
  
    const result = await userService.createOne(data);
    
    res.status(202).send(result);
  }
  
  async findUnique(req: Request<any>, res: Response<any>) {
    res.status(202).send();
  
    const { query } = req.body;
 
    
  
    const result = await userService.findMany(query);

    
  
    res.status(200).send(result);
  
    // const result = await userService.findUnique(query);
    // console.log(
    //   "🚀 ~ file: index.ts:26 ~ BaseController ~ findUnique ~ result:",
    //   result,
    // );
  
    // res.status(200).send(result);
  }
  
  async findMany(req: Request<any>, res: Response<any>) {
    res.status(202).send();
  
    const { query } = req.body;
  
  
    const result = await userService.findMany(query);

  
    res.status(200).send(result);
  }
}

export const userController = new UserController()


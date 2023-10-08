import { Request, Response } from "express";
import { userService } from "../../service/user";

export class UserController {

  async signup(req: Request<any>, res: Response<any>) {
    const { data } = req.body;
  
    const result = await userService.signup(data);
    
    res.status(202).send(result);
  }
  

  async login(req: Request<any>, res: Response<any>) {
  
    const query = req.body;
  
    const result = await userService.login(query);
  
    res.status(200).send(result);
  
  }
}

export const userController = new UserController()
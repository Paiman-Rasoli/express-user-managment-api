import { Request, Response } from "express";
import { users } from "../data/users";

export class ApiController {
  req: Request;
  res: Response;
  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
  }
  login(): object {
    const { email, password } = this.req.body;
    const res = users.filter((item) => item.email === email);
    if (res.length > 0) {
      return this.res.status(200).json({ email: email, pass: password });
    }
    return this.res.status(400).json({ msg: "User Not Found!" });
  }
}

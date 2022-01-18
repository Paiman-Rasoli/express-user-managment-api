import { Request, Response } from "express";
export class ApiController {
  req: Request;
  res: Response;
  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
  }
  login(): void {
    const { email, password } = this.req.body;
    this.res.status(200).json({ email: email, pass: password });
  }
}

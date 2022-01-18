import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const secret =
  process.env.SECRET_JWT ||
  "e1482cc742a2ced3e4b94102e7f189d45d21095adcbb90592e27f4da31d1bc6547d3977015192454b26e680e622e4f9d8e09513535848b041e744fdb400846de";
const pipeline = {
  authorizeToken: (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.acess_token;
    if (token == null) {
      return res.status(401).redirect("/");
    }
    jwt.verify(token, secret, (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      req.body.id = user;
      next();
    });
  },
};
export default pipeline;

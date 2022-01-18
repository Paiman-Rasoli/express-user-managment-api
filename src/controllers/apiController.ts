import { Request, Response } from "express";
import { users } from "../data/users";
const bcrypt = require("bcryptjs");
import { Jwt } from "../utils/jwt";
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
      // check plain password with hashed password
      if (bcrypt.compareSync(password, res[0].password)) {
        // delete password not to send in response
        res[0].password = "";
        const token: string = new Jwt(
          res[0].id,
          res[0].firstname,
          res[0].lastname
        ).createToken();
        return this.res
          .cookie("acess_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" ? true : false,
            maxAge: 168 * 60 * 60 * 1000,
            // sameSite: "None",
          })
          .status(200)
          .json({ payload: res[0] });
      }
      return this.res.status(400).json({ msg: "Invalid credentials!" });
    }
    return this.res.status(400).json({ msg: "User Not Found!" });
  }
}

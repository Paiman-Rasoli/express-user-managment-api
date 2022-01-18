import { Router } from "express";
import { ApiController } from "../controllers/apiController";
const routes: Router = Router();
routes.post("/login", (req, res) => {
  const obj = new ApiController(req, res);
  obj.login();
});
module.exports = routes;
// module

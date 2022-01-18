import { Router } from "express";
const routes: Router = Router();
routes.get("/", (req, res) => {
  res.send("Hi");
});
module.exports = routes;
// module

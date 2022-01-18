import { Router } from "express";
import pipeline from "../middleware/authorize";
const routes: Router = Router();
routes.get("/", (req, res) => {
  res.render("index.ejs", { name: "paiman" });
});
// dashboard is a protected route!
// we check if user jwt is valid through middelware

routes.get("/dashboard", pipeline.authorizeToken, (req, res) => {
  const { id } = req.body;
  const data = res.render("dashboard.ejs", { name: id.firstName });
});
module.exports = routes;
// module

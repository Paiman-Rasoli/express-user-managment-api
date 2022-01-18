import { Router } from "express";
const routes: Router = Router();
routes.get("/", (req, res) => {
  res.render("index.ejs", { name: "paiman" });
});
module.exports = routes;
// module

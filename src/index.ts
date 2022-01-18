import express, { Application, Request, Response } from "express";
import path from "path";
const app: Application = express();
const PORT = process.env.PORT || 9000;
let colors = require("colors");
let log: Function = console.log;
let cookieParser = require("cookie-parser");

// Accept json / urlencoded or request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// view engines
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
// routes
app.use("/", require("./routes/main"));
app.use("/api", require("./routes/api"));
// Run the app and you will see the cb.
app.listen(PORT, (): void => {
  log(
    `${colors.underline("User Managment")} => Node + ${colors.gray(
      "Express"
    )} + ${colors.blue("Typescript")}`
  );
  log(colors.green("Running ") + colors.yellow(`on port ${PORT}`));
});

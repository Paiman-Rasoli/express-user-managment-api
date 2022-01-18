import express, { Application, Request, Response } from "express";
const app: Application = express();
const PORT = process.env.PORT || 9000;
var colors = require("colors");
let log: Function = console.log;

// Accept json / urlencoded or request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/main"));
// Run the app and you will see the cb.
app.listen(PORT, (): void => {
  log(
    `${colors.underline("User Managment")} => Node + ${colors.gray(
      "Express"
    )} + ${colors.blue("Typescript")}`
  );
  log(colors.green("Running ") + colors.yellow(`on port ${PORT}`));
});

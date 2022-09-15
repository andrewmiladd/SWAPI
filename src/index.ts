import express, { Application, Request, Response } from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import cors from "cors";

export let app: Application = express();
let PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log("I am running now");
});

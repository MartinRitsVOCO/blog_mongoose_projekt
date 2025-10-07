import e from "express";
import config from "./config.js";
import mongoose from "mongoose";

const app: e.Express = e();
const PORT = config.port;

mongoose
  .connect(config.dbString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.get("/", (req: e.Request, res: e.Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
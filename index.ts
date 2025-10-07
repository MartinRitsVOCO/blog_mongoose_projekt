import e from "express";
import config from "./config.js";
import mongoose from "mongoose";

const app: e.Express = e();
const PORT = config.port;

import articleRouter from "./controllers/article.js";

try {
  await mongoose.connect(config.dbString);
  console.log("Connected to MongoDB")
} catch (error) {
  console.error(error)
}

app.use("/article", articleRouter);

app.get("/", (req: e.Request, res: e.Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
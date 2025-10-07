import e from "express";
import config from "./config.js";
import mongoose from "mongoose";
const app = e();
const PORT = config.port;
import articleRouter from "./controllers/article.js";
app.use(e.urlencoded({ extended: true }));
app.use(e.json());
try {
    await mongoose.connect(config.dbString);
    console.log("Connected to MongoDB");
}
catch (error) {
    console.error(error);
}
app.use("/article", articleRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:" + PORT);
});
//# sourceMappingURL=index.js.map
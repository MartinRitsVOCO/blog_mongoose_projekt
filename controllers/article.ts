import e from "express";
import Article from "../models/article.js";

const router: e.Router = e.Router();

router.post("/", async (req: e.Request, res: e.Response) => {
  const article = new Article({
    header: req.body.header,
    content: req.body.content
  });
  article.save()
    .then(() => res.status(201).send(article))
    .catch((err) => res.status(400).send(err));
});

export default router;
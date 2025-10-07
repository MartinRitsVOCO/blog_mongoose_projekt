import e from "express";
import Article from "../models/article.js";
import Comment from "../models/comment.js";

const router: e.Router = e.Router();

router.post("/", async (req: e.Request, res: e.Response) => {
  const article = new Article({
    header: req.body.header,
    content: req.body.content
  });
  article.save()
    .then(() => res.status(201).send(article))
    .catch((err) => res.status(500).send(err));
});

router.get("/", async (req: e.Request, res: e.Response) => {
  try {
    const articles = await Article.find();
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/id/:id", async (req: e.Request, res: e.Response) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).send(article);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/id/:id", async (req: e.Request, res: e.Response) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    res.status(200).send(article);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/id/:id", async (req: e.Request, res: e.Response) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(article);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/id/:id/comment", async (req: e.Request, res: e.Response) => {
  try {
    const comment = new Comment({
      date: new Date(),
      content: req.body.content,
      article: req.params.id
    });
    comment.save()
      .then((result) => Article.findByIdAndUpdate(
        { _id: req.params.id },
        { $push: { comments: result._id }, },
        { new: true }
      ))
      .then((article) => res.status(201).send(article))
      .catch((err) => res.status(500).send(err));
  } catch (error) {
    res.status(500).send(error);
  }
})

router.get("/id/:id/comment", async (req: e.Request, res: e.Response) => {
  try {
    const article = await Article.findById(req.params.id).populate("comments");
    res.status(200).send(article);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
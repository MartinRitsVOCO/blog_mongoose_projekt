import e from "express";
import Comment from "../models/comment.js";
const router = e.Router();
router.post("/", async (req, res) => {
    const comment = new Comment({
        date: new Date(),
        content: req.body.content,
        article: req.body.article
    });
    comment.save()
        .then(() => res.status(201).send(comment))
        .catch((err) => res.status(500).send(err));
});
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find().populate("article");
        res.status(200).send(comments);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.get("/id/:id", async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        res.status(200).send(comment);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.delete("/id/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        res.status(200).send(comment);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.put("/id/:id", async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(comment);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
export default router;
//# sourceMappingURL=comment.js.map
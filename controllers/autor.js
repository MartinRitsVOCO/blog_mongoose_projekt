import autor from "../models/autor.js";
import contactData from "../models/contactData.js";
import e from "express";
const router = e.Router();
router.get("/", async (req, res) => {
    autor.find().populate("contactData")
        .then((autors) => res.status(200).send(autors))
        .catch((err) => res.status(500).send(err));
});
router.post("/", async (req, res) => {
    const newContactData = new contactData({
        address: req.body.address,
        phone: req.body.phone
    });
    newContactData.save()
        .then((contactData) => {
        const newAutor = new autor({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            personalCode: req.body.personalCode,
            contactData: contactData._id
        });
        newAutor.save()
            .then(() => res.status(201).send(newAutor))
            .catch((err) => res.status(500).send(err));
    })
        .catch((err) => res.status(500).send(err));
});
router.get("/id/:id", async (req, res) => {
    autor.findById(req.params.id).populate("contactData")
        .then((autor) => res.status(200).send(autor))
        .catch((err) => res.status(500).send(err));
});
router.delete("/id/:id", async (req, res) => {
    autor.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).send({ message: "Autor " + req.params.id + " deleted" }))
        .catch((err) => res.status(500).send(err));
});
router.put("/id/:id", async (req, res) => {
    autor.findByIdAndUpdate(req.params.id, req.body)
        .then((updatedAutor) => {
        contactData.findByIdAndUpdate(updatedAutor?.contactData, req.body.contactData)
            .then(() => res.status(200).send(updatedAutor));
    })
        .catch((err) => res.status(500).send(err));
});
export default router;
//# sourceMappingURL=autor.js.map
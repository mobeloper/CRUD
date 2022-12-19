module.exports = app => {
const crud = require("../controllers/crud.controller.js");
var router = require("express").Router();
router.post("/:document/", crud.create);
router.get("/:document/", crud.finds);
router.put("/:document/:id", crud.update);
router.get("/:document/:id", crud.find);
router.delete("/:document/:id", crud.delete);
router.delete("/:document/", crud.deleteAll);
app.use("/crud", router);
};

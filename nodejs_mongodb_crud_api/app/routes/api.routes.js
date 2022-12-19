module.exports = app => {

const api = require("../controllers/api.controller.js");
var router = require("express").Router();

router.post("/:document/", api.create);
router.get("/:document/", api.finds);
router.put("/:document/:id", api.update);
router.get("/:document/:id", api.find);
router.delete("/:document/:id", api.delete);
router.delete("/:document/", api.deleteAll);

app.use("/api/v1", router);

};

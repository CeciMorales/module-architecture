let router = require("express").Router();
const salonesController = require("../controllers/salones-controllers");

router.get("/", salonesController.getSalones);

router.get("/:id", salonesController.getSalonById);

router.post("/createSalon", salonesController.createSalon);

module.exports = router;

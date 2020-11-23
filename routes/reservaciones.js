let router = require("express").Router();
const reservacionesController = require("../controllers/reservaciones-controllers");

router.get("/", reservacionesController.getReservaciones);

router.get("/:email", reservacionesController.getReservacionesByUser);

router.get("/salon/:id", reservacionesController.getReservacionesBySalon);

router.post("/createReservacion", reservacionesController.createReservacion);
module.exports = router;

let router = require("express").Router();
const reservacionesController = require("../controllers/reservaciones-controllers");

router.get("/", reservacionesController.getReservaciones);

router.get("/:email", reservacionesController.getReservacionesByUser);

router.get(
  "/salones/:id_salon",
  reservacionesController.getReservacionesBySalon
);

router.post("/createReservacion", reservacionesController.createReservacion);
module.exports = router;

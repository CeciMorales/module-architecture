const Reservacion = require("../models/Reservacion");

exports.getReservaciones = async (req, res) => {
  await Reservacion.all().then((reservaciones) => {
    res.json(reservaciones);
  });
};

exports.getReservacionesByUser = async (req, res) => {
  let email = req.params.email;

  await Reservacion.getByUser(email)
    .then((reservacion) => {
      console.log("Reservaciones controller:", reservacion);
      return res.status(200).json(reservacion);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json("No encontrado");
    });
};

exports.getReservacionesBySalon = async (req, res) => {
  let id_salon = req.params.id_salon;

  await Reservacion.getBySalon(id_salon)
    .then((reservacion) => {
      console.log("Reservaciones controller:", reservacion);
      return res.status(200).json(reservacion);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json("No encontrado");
    });
};

exports.createReservacion = async (req, res) => {
  let reservacion = {};
  reservacion.user_email = req.body.user_email;
  reservacion.id_salon = req.body.id_salon;
  reservacion.dia = req.body.dia;
  reservacion.mes = req.body.mes;
  reservacion.anio = req.body.anio;
  reservacion.horaInicio = req.body.horaInicio;
  reservacion.horaFin = req.body.horaFin;
  reservacion.razon = req.body.razon;
  reservacion.estado = req.body.estado;
  await Reservacion.create(reservacion).then((id) => {
    console.log("Reserva created with id: ", id);
    res.json({ id: id });
  });
};

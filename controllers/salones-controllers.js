const Salon = require("../models/Salon");

exports.getSalones = async (req, res) => {
  await Salon.all().then((salones) => {
    res.json(salones);
  });
};

exports.getSalonById = async (req, res) => {
  let id = req.params.id;

  await Salon.findById(id)
    .then((salon) => {
      console.log("Salon controller:", salon);
      return res.status(200).json(salon);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json("No encontrado");
    });
};

exports.createSalon = async (req, res) => {
  let salon = {};
  salon.id_salon = req.body.id_salon;
  salon.edificio = req.body.edificio;
  salon.tipo = req.body.tipo;
  salon.capacidad = req.body.capacidad;
  salon.proyector = req.body.proyector;
  salon.pizarron = req.body.pizarron;
  salon.tomasCorriente = req.body.tomasCorriente;
  await Salon.create(salon).then((id) => {
    console.log("Salon created with id: ", id);
    res.json({ id: id });
  });
};

const knex = require("../database/connection");

exports.all = () => {
  return knex.select("*").from("salones");
};

exports.create = (salon) => {
  return knex("salones").insert({
    id_salon: salon.id_salon,
    edificio: salon.edificio,
    tipo: salon.tipo,
    capacidad: salon.capacidad,
    proyector: salon.proyector,
    pizarron: salon.pizarron,
    tomasCorriente: salon.tomasCorriente,
  });
};

exports.findById = (id_salon) => {
  return knex.select("*").from("salones").where("id_salon", id_salon).first();
};

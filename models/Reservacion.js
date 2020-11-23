const knex = require("../database/connection");

exports.all = () => {
  return knex.select("*").from("reservaciones");
};

exports.create = (reservacion) => {
  return knex("reservaciones").insert({
    user_email: reservacion.user_email,
    id_salon: reservacion.id_salon,
    dia: reservacion.dia,
    mes: reservacion.mes,
    anio: reservacion.anio,
    horaInicio: reservacion.horaInicio,
    horaFin: reservacion.horaFin,
    razon: reservacion.razon,
    estado: reservacion.estado,
  });
};

exports.getByUser = (email) => {
  return knex.select("*").from("reservaciones").where("user_email", email);
};

exports.getBySalon = (id) => {
  return knex.select("*").from("reservaciones").where("id_salon", id);
};

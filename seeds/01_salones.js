exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("salones")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("salones").insert([
        {
          id_salon: "CDTC-104",
          edificio: "CEDETEC",
          tipo: "Salon de clases",
          capacidad: 30,
          proyector: true,
          pizarron: true,
          tomasCorriente: 5,
        },
        {
          id_salon: "A1-305",
          edificio: "Aulas 1",
          tipo: "Aula Magna",
          capacidad: 70,
          proyector: true,
          pizarron: true,
          tomasCorriente: 10,
        },
        {
          id_salon: "A2-204",
          edificio: "Aulas 2",
          tipo: "Salon de clases",
          capacidad: 30,
          proyector: true,
          pizarron: true,
          tomasCorriente: 5,
        },
        {
          id_salon: "A3-104",
          edificio: "Aulas 3",
          tipo: "Salon de clases",
          capacidad: 30,
          proyector: true,
          pizarron: true,
          tomasCorriente: 5,
        },
        {
          id_salon: "CDTC-404",
          edificio: "CEDETEC",
          tipo: "Laboratorio",
          capacidad: 15,
          proyector: true,
          pizarron: true,
          tomasCorriente: 5,
        },
        {
          id_salon: "SUR-104",
          edificio: "Edificio Sur",
          tipo: "Salon de baile",
          capacidad: 25,
          proyector: false,
          pizarron: false,
          tomasCorriente: 3,
        },
        {
          id_salon: "SUR-108",
          edificio: "Edificio Sur",
          tipo: "Salon de usos múltiples",
          capacidad: 30,
          proyector: false,
          pizarron: true,
          tomasCorriente: 5,
        },
        {
          id_salon: "A4-102",
          edificio: "Aulas 4",
          tipo: "Sala de Reuniones",
          capacidad: 10,
          proyector: true,
          pizarron: true,
          tomasCorriente: 5,
        },
        {
          id_salon: "CDTC-204",
          edificio: "CEDETEC",
          tipo: "Salon de computo",
          capacidad: 25,
          proyector: true,
          pizarron: true,
          tomasCorriente: 20,
        },
        {
          id_salon: "CDTC-304",
          edificio: "CEDETEC",
          tipo: "Laboratorio de Diseño",
          capacidad: 20,
          proyector: true,
          pizarron: true,
          tomasCorriente: 25,
        },
      ]);
    });
};

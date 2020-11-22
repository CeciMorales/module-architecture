exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("reservaciones")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("reservaciones").insert([
        {
          user_email: "L01456780@itesm.mx",
          id_salon: "CDTC-104",
          dia: "23",
          mes: "Noviembre",
          anio: "2020",
          horaInicio: "7 pm",
          horaFin: "10 pm",
          razon: "Clase",
          estado: "Aprobado",
        },
        {
          user_email: "L01456780@itesm.mx",
          id_salon: "A1-305",
          dia: "24",
          mes: "Noviembre",
          anio: "2020",
          horaInicio: "5 pm",
          horaFin: "6 pm",
          razon: "Asesoria",
          estado: "Aprobado",
        },
        {
          user_email: "L01456780@itesm.mx",
          id_salon: "A2-204",
          dia: "24",
          mes: "Noviembre",
          anio: "2020",
          horaInicio: "6 pm",
          horaFin: "7:30 pm",
          razon: "Clase",
          estado: "Aprobado",
        },
        {
          user_email: "L01456780@itesm.mx",
          id_salon: "CDTC-104",
          dia: "25",
          mes: "Noviembre",
          anio: "2020",
          horaInicio: "7 pm",
          horaFin: "10 pm",
          razon: "Examen Final",
          estado: "Aprobado",
        },
      ]);
    });
};

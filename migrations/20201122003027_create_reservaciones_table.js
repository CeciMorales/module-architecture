exports.up = function (knex) {
  return knex.schema.createTable("reservaciones", (table) => {
    table.increments("id");
    table.string("user_email").notNull();
    table.string("id_salon").notNull();
    table.string("dia").notNull();
    table.string("mes").notNull();
    table.string("anio").notNull();
    table.string("horaInicio").notNull();
    table.string("horaFin").notNull();
    table.string("razon");
    table.string("estado").defaultTo("Pendiente");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("reservaciones");
};

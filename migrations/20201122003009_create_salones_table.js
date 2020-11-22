exports.up = function (knex) {
  return knex.schema.createTable("salones", (table) => {
    table.increments("id");
    table.string("id_salon", 255).notNullable();
    table.string("edificio", 512).notNullable();
    table.string("tipo", 512).notNullable();
    table.integer("capacidad").notNullable();
    table.boolean("proyector").notNullable().defaultTo(true);
    table.boolean("pizarron").notNullable().defaultTo(true);
    table.integer("tomasCorriente").notNullable().defaultTo(1);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("salones");
};

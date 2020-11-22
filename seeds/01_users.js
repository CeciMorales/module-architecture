exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "A01337302@itesm.mx",
          password: "contraseña",
          userType: "alumno",
        },
        {
          email: "A01652400@itesm.mx",
          password: "contraseña",
          userType: "alumno",
        },
        {
          email: "A01337202@itesm.mx",
          password: "contraseña",
          userType: "alumno",
        },
        {
          email: "L01456780@itesm.mx",
          password: "contraseña",
          userType: "profesor",
        },
        {
          email: "L01678903@itesm.mx",
          password: "contraseña",
          userType: "profesor",
        },
        {
          email: "L01078654@itesm.mx",
          password: "contraseña",
          userType: "director",
        },
      ]);
    });
};

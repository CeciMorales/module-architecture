const knex = require("../database/connection");

exports.all = () => {
  return knex.select("*").from("users");
};

exports.create = (user) => {
  return knex("users").insert({
    email: user.email,
    password: user.password,
    userType: user.userType,
  });
};

exports.find = (email, password) => {
  return knex
    .select("*")
    .from("users")
    .where("email", email)
    .where("password", password)
    .first();
};

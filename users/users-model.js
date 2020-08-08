const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users").select("id", "username", "password");
}

function findBy(filter) {
  return db("users").first().where(filter);
}

function add(user) {
  console.log(user)
  return db("users").insert(user);

}

function findById(id) {
  return db("users").where({ id }).first();
} 
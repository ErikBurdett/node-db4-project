const knex = require("knex")
const knextfile = require("../knexfile")

module.exports = knex(knexfile.development)

exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments()
    })
    .createTable('ingredients', table => {
        table.increments()})
    .createTable('steps', table => {
        table.increments()
    })
    .createTable('step_ingredients', table => {
        table.increments()
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('step_ingredients')
};

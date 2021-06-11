
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipes', table => {
        table.increments()
        table.string('recipe_name', 200).notNullable().unique()
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')})
        table.string('recipe_name', 200).notNullable().unique()
        table.string('ingredient_unit', 50)
    .createTable('steps', table => {
        table.increments()
    })
    .createTable('step_ingredients', table => {
        table.increments('steps_id')
        table.string('step_text', 200).notNullable()
        table.integer('step_number').notNullable()
        table.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipes_id')
            .inTable('recipes')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
    .createTable('step_ingredients', table =>{
        table.increments('step_ingredient_id')
        table.float('quantity').notNullable()
        table.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .intable('steps')
            .onDelete('RESTRICT')
            .onUpdate('RESTRICT')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('step_ingredients')
};


exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', tbl =>{
    tbl.integer('ingredients_id').unsigned().references('id').inTable('ingredients')
    .onDelete('RESTRICT').onUpdate('CASCADE');
    tbl.integer('recipe_id').unsigned().references('id').inTable('recipes')
    .onDelete('RESTRICT').onUpdate('CASCADE');

    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('ingredients');
};


exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl =>{
        tbl.increments();
        tbl.string('name', 250).notNullable();
        tbl.integer('dishes_id').unsigned().references('id').inTable('dishes')
        .onDelete('RESTRICT').onUpdate('CASCADE');
        tbl.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('dishes');
};

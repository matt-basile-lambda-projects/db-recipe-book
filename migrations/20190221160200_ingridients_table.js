
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl =>{
        tbl.increments();
        tbl.string('name', 250).notNullable();
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('ingredients');
};
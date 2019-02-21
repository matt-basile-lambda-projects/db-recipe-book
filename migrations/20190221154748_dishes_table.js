
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', tbl =>{
      tbl.increments();
      tbl.string('name', 250).notNullable();
      tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExist('dishes');
};

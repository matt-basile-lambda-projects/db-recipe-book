
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dishes_id: 1, name: "Momma's Tacos"},
        {dishes_id: 2, name: "Momma's Pasta"},
        {dishes_id: 3, name: "Momma's Curry"}
      ]);
    });
};

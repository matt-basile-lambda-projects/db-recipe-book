
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {ingredients_id: 4, recipe_id: 1},
        {ingredients_id: 4, recipe_id: 2},
        {ingredients_id: 4, recipe_id: 3},
        {ingredients_id: 3, recipe_id: 4},
        {ingredients_id: 4, recipe_id: 4}
      ]);
    });
};

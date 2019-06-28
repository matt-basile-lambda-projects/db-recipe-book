
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: '1 Package of Tortillas'},
        {name: '1 Pound Spaghetti'},
        {name: '3 Tsps of Tumeric'},
        {name: '2lbs of Chicken'},
      ]);
    });
};

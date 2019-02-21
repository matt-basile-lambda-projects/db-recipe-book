const knex = require('knex');
const config = require('../../knexfile.js');
const db = knex(config.development);

module.exports = {
  getRecipes,
  addRecipe,
  getRecipe
};

function getRecipes(){
    return db('recipes')
}
async function addRecipe(recipe){
    const [id] = await db('recipes').insert(recipe);
    return getRecipe(id)
}
function getRecipe(id){
  return db('recipes')
  .where( { id } );
}

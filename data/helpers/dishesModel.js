const knex = require('knex');
const config = require('../../knexfile.js');
const db = knex(config.development);

module.exports = {
  getDishes,
  addDish,
  getDish
};

function getDishes(){
    return db('dishes')
}
async function addDish(dish){
    const [id] = await db('dishes').insert(dish);
    return getDish(id)
}
function getDish(id){
  return db('dishes')
  .where( { id } );
}


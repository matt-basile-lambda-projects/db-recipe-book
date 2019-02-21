const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile')
const recipeRouter = require('./Routes/recipeRouter')

const db = knex(knexConfig.development);
const server = express();
server.use(express.json());
server.use("/recipes", recipeRouter)

// DISHES ACTIONS
server.get('/dishes', async (req, res) =>{
    try {
     const dishes = await db('dishes');
     res.status(200).json(dishes)
    } catch (error) {
        res.status(500).json(error)
    }
})
server.get('/dishes/:id', async (req, res) =>{
    try {
     const dish = await db('dishes').where({id: req.params.id});
     res.status(200).json(dish)
    } catch (error) {
        res.status(500).json(error)
    }
})
server.get('/dishes/:id/recipes', async (req, res) =>{
    try {
     const recipes = await db('recipes').where({dishes_id: req.params.id});
     res.status(200).json(recipes)
    } catch (error) {
        res.status(500).json(error)
    }
})
server.post('/dishes', async (req, res) => {
    try{
      const [id] = await db('dishes').insert(req.body);
    //   const dish = await db('dishes').where({id}).first();
      res.status(200).json(id);
    }
    catch(error){
     res.status(500).json(error);
    }
});

const port = process.env.PORT || 5000;
server.listen(port, ()=> console.log(`\n Running on ${port}\n`))
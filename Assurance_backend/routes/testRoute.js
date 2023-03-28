const express = require('express');
const testModel = require('../model/test');

const app = express();

//la fonction pour affiche les element de la base de donnes

app.get('/', async(req,res)=>{
    const test = await testModel.find({});

    try{
        res.send(test);
    }catch(error){
        res.status(500).send(error);
    }
});
// la fonction pour ajouter dans la base de donnees

app.post('/', async(req,res)=>{
    const tests = new testModel(req.body);

    try{
        await tests.save();
        res.send(tests);
    }catch(error){
        res.status(500).send(error);
    }
});
// la fonction pour mettre ajoure les information dasn la base de donnees

app.patch('/:id', async(req,res)=>{
    try{
        await testModel.findByIdAndUpdate(req.params.id, req.body);
        await testModel.save();
        res.send(test);
    }catch (error){
        res.status(500).send(error);
    }
});

// la fonction pour supprimer un element dans une base de donnees

app.delete("/:id", async (req,res)=>{
    try{
        const food = await testModel.findByIdAndDelete(req.params.id);

        if(!test) res.status(404).send("No item found");
        res.status(200).send();
    }catch(error){
        res.status(500).send(error);
    }
});

module.exports = app;
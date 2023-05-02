const express = require('express');
const model = require('../model/client');

const app = express();
app.post('/',async (req,res,next)=>{
    const values = await model.find({});

    try {
        res.send(values);
        
    } catch (error) {
        res.status(500).send(error);
    }
});
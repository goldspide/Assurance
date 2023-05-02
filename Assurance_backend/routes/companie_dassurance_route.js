const mongoose = require('mongoose');

const companieSchema = new mongoose.Schema({
    nom:{
        type:String,
        require:true,
        trime:true
    },
    adresse:{
        type:String,
        required:true,
        trime:true
    },
    telephone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trime:true
    }
});

const companie = mongoose.model('companie',companieSchema);
module.exports = companie;
const mongoose = require('mongoose');

const sinistreSchema = new mongoose.Schema({
    dateDincident:{
        type:Date,
        required:trusted
    },
    description:{
        type:String,
        required:true
    },
    montantPaye:{
        type:Number,
        required:true
    },
    lieu:{
        type:String,
        required:true
    }
});
const sinistre = mongoose.model('sinistre',sinistreSchema);

module.exports = sinistre;
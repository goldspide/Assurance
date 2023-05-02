const mongoose = require('mongoose');
const documentSchema = new mongoose.Schema({
    titre:{
        type:String,
        required:true
    },
    auteur:{
        type:String,
        required:true,
        trime:true
    }
});

const document = mongoose.model('document',documentSchema);

module.exports = document;
const mongoose =  require('mongoose');

const clientSchema = new mongoose.Schema({
    nom: {
        type:String,
        required:true,
        trime:true
    },
    prenom:{
        type:String,
        required:true,
        trime:true
    },
    Age:{
        type:Number,
        required:true
    },
    telephone:{
        type:String
    },
    Email:{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
    }
});

const client = mongoose.model('client',clientSchema);
module.exports = client;

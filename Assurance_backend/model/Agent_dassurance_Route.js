const mongoose = require('mongoose');

const  agentSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true,
        trime:true
    },
    prenom:{
        type:String,
        required:true,
        trime:true,
    },
    age:{
        type:String,
    },
    qualite:{
        type:String,
    }
});

const agent = mongoose.model('agent',agentSchema);
module.exports = agent;
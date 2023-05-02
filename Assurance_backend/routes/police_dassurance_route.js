const mongoose = require('mongoose');

const policeSchema = new mongoose.Schema({
    typeDePolice:{
        type:String,
        required:true,
        trime:true
    },
    montant:{
        type:Number,
        required:true
    },
    perideDeCouverture:{
        type:String,
        requried:true
    }
});

const police = mongoose.model('police',policeSchema);

module.exports =police;
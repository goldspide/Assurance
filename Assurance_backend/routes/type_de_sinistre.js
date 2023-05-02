const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true,
        trime:true
    },
    description:{
        type:String,
        required:true
    }
});
const type = mongoose.model('type',typeSchema)

module.exports = type;

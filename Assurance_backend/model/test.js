const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    nom:{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    prenom:{
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        default: 0,
        validate(value){
            if(value < 0) throw new Error("negative ages aren't real.");
        },
    },
    date: {
        type: Date,
        default: Date.now
    }

});

const test = mongoose.model("test", testSchema);

module.exports = test;
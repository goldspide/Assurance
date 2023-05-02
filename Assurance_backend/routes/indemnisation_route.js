const mongoose = require('mongoose');

const indemnisationSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    prime:{
        type:Number,
        required:true
    },
    modeDePayment:{
        type:String,
        required:true
    }
});

const indemnisation = mongoose.model('indemnisation',indemnisationSchema);
module.exports = indemnisation;
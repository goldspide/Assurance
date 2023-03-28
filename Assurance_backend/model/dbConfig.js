const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/Assurance",
    {useNewUrlParser: true, useUnifiedTopology: true},
    console.log("database connected")
    // (err) => {
    //     if(!err) console.log("Mongodb Connected");
    //     else console.log("Connection error"+ err);
    // }
);

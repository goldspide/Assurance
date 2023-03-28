const express = require('express');
const mongoose = require('mongoose');
const postsModel = require('./routes/testRoute.js');

const app = express();

app.use(express.json());

mongoose.connect(
    "mongodb://localhost:27017/collect",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    }
);

app.use(postsModel);
app.listen(8000,() => {console.log("serveur is running ...");
});
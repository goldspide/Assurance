const express = require('express');
const mongoose = require('mongoose');
const postsModel = require('./routes/testRoute.js');
const cors = require('cors')

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(postsModel);

mongoose.connect(
    "mongodb://localhost:27017/collect",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    }
);


app.listen(8001,() => {console.log("serveur is running ...");
});
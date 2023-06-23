require("dotenv").config()
const express = require('express');
const router = require('./router')
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')

const corsOptions = {
    origin: ['http://localhost:4200']
}  

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(process.env.PORT, () => console.log('Server running on port 3000'));

module.exports={
    app
}

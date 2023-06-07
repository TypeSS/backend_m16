require("dotenv").config()
const express = require('express');
const router = require('./router')
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: ['http://localhost:4200','http://localhost:64139']
}  

app.use(express.json());
app.use(cors(corsOptions));
app.use(router);



app.listen(process.env.PORT, () => console.log('Server running on port 3000'));

module.exports={
    app
}

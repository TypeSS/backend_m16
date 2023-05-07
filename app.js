require("dotenv").config()
const express = require('express');
const router = require('./router')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(router);



app.listen(process.env.PORT, () => console.log('Server running on port 3000'));

module.exports={
    app
}

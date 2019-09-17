require('rootpath')();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const Contants = require('./constants')

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Hello')
})

app.listen(Contants.Port(), (err) => {
    if (err) console.log(err, 'err');
    else console.log("Server is running", Contants.Port())
})
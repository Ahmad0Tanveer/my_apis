const express = require("express");
const bodyParser = require('body-parser')
const productRouth = require("./apis/prouducts");


const app = express();


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.use('/products',productRouth);

app.listen(5000);
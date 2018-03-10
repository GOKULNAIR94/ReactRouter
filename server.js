'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const restService = express();

var path = require('path');
restService.use(bodyParser.urlencoded({
    extended: true
}));
restService.use(bodyParser.json());

//restService.use(express.static(path.join(__dirname, '/src/')));


app.use(express.static(__dirname + '/dist/'));
app.use('/src/assets', express.static(__dirname + '/src/'));

restService.listen((process.env.PORT || 9000), function() {
  console.log("Server up and listening");
});
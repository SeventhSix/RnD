var util = require('util');
var express = require('express');

var serverPort = parseInt(process.argv.slice(2)[0]);
var app = express();

app.get('/', function (req, res) {
  res.send(util.format('Hello World : %d', serverPort));
  console.log('request ...');
});

app.listen(serverPort);
console.log(util.format('Server Running : Port - %d', serverPort));
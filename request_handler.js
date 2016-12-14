const http = require('http');
const express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('This is the root endpoint!');
    console.log("request sent to ", req);
});

app.listen(3000, function() {
    console.log('app starting');
});


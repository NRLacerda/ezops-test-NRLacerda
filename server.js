var express = require('express');
var mongoose = require(‘mongoose’);

var app = express();

app.use(express.static(__dirname));

var server = app.listen(3000, ()=>{
    console.log('server is running on port', server.address().port)
})


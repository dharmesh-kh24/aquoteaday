var express = require('express');
var app = express();

app.use('/', express.static('public'));
var port = process.env.PORT || 4005;

var server = app.listen(port, function(req, res) {
    console.log("server running at port " + port);
})

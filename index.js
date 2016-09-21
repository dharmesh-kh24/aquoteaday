var express = require('express');
var app = express();

app.use('/abc', express.static('public'));

var port = 4005;

var server = app.listen(port, function(req, res) {
    console.log("server running at port" + port);
})

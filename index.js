var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var server = http.Server(app);
var httpPort = 23444;

// parse application/json
app.use(bodyParser.json());

app.post("/hooked", function(req, res) {
	console.log(req.body);
	res.end("OK");
});

server.listen(httpPort, function() {
	console.log("Listening on *:" + httpPort);
});
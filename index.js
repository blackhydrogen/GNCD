var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");

var exec = require("child_process").exec;

var app = express();
var server = http.Server(app);
var httpPort = 23444;

// parse application/json
app.use(bodyParser.json());

app.post("/hooked", function(req, res) {
	console.log("==================== HOOKED ====================")
	console.log();
	console.log(req.body);
	console.log();
	
	console.log("Executing shell script...");
	console.log();
	
	exec("./onhook_run.sh",
	function (error, stdout, stderr) {
		console.log("=== stdout ===");
		console.log(stdout);
		console.log();
		console.log("=== stderr ===");
		console.log(stderr);
		console.log();
		if (error !== null) {
			console.log("=== exec error ===")
			console.log(error);
			console.log();
		}
		
		console.log("Shell script done.");
		console.log();
		console.log();
		console.log();
		console.log();
	});
	
	res.end("OK");
});

server.listen(httpPort, function() {
	console.log("Listening on *:" + httpPort);
});
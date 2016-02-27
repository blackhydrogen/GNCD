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
	console.log(req.body);
	
	console.log("Executing shell script...");
	
	exec("./onhook_run.sh" + req.params.movie,
	function (error, stdout, stderr) {
		console.log("stdout: " + stdout);
		console.log("stderr: " + stderr);
		if (error !== null)
			console.log("exec error: " + error);
		
		console.log("Shell script done.");
		console.log();
		console.log();
	});
	
	res.end("OK");
});

server.listen(httpPort, function() {
	console.log("Listening on *:" + httpPort);
});
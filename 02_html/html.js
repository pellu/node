var http = require('http');

var server=http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end('<!DOCTYPE html>'+
		'<html>'+
		'<head>'+
		'<head>'+
		'<title>Titre</title>'+
		'</head>'+
		'<body>'+
		'<p>P</p>'+
		'</body>'+
		'</html>'
	);
});
server.listen(3000);
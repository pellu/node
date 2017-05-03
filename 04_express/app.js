var express = require('express');
var app=express();
app.get("/", function(req, res){
	res.end('Accueil');
});
app.get("/cat", function(req, res){
	res.end('cat');
});
app.get("/cat/js", function(req, res){
	res.end('Cat js');
});

app.listen(3000);
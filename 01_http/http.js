//console.log('jello');
var http = require('http');
var server=http.createServer(function(req,res){
	res.end('Salut tout le monde');
});
server.listen(3000);
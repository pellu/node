var http = require('http');
var url = require('url');

var server=http.createServer(function(req,res){
	var page = url.parse(req.url).pathname;
	res.writeHead(200, {"Content-Type": "text/plain"});
	if(page==='/'){
		res.write('Accueil');
	}else if(page==='/categorie'){
		res.write('Catégories');
	}else if(page==='/categorie/js/'){
		res.write('categorie js')
	}else{
		res.write('bug');
	}
	res.end();
});
server.listen(3000);
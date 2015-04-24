// Inicializa o express
var express = require('express');

// Chamada do express para compilar uma nova instância dela e atribuí-la à variável app 
var app = express();

app.configure(function(){
	app.set('view engine','jade');
	app.use(express.static(__dirname + '/public'));
})

app.get('/', function(req, res){
	res.render("index.jade", {layout:false});
});

app.listen(8080);

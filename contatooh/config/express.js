// config/express.js
var express = require('express');
var load = require('express-load');

module.exports = function(){
	var app = express();

	// Configuração de ambiente
	app.set('port', 3000);

	// middleware
	app.use(express.static('./app'));

	app.set('view engine', 'ejs');
	app.set('views', './views');

	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
}
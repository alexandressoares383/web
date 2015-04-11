var MyRouter = Backbone.Router.extend({
	routes: {
		"/certificates/:id": "getCertificate",
	},
	getCertificate: function(id){
		new CertificateView({el: $('#certificate')});
	}
});

var router = new MyRouter;

Backbone.history.start();
Stooge = Backbone.Model.extend({
	defaults: {
		'name' : 'Guy Incognito',
		'power': 'Classified',
		'friends': [],
	},

	initialize: function(){
		// Faz a inicialização
	}
});

var account = new Stooge({ name: 'Larry', power: 'Baldness', 
						   friends: ['Curly','Moe']});
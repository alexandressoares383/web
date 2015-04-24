require.config({
	paths: {
		JQuery: '/js/libs/jquery',
		Underscore: '/js/libs/underscore',
		Backbone: '/js/libs/backbone',
		text: '/js/libs/text',
		templates: '../templates'
	},

	shim: {
		'Backbone': ['Underscore','JQuery'],
		'SocialNet': ['Backbone']
	}
});

require(['SocialNet'], function(SocialNet){
	SocialNet.initialize();
});
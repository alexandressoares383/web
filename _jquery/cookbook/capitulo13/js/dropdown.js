// Inicialize
function init_dropdown(){
	if(!$('ul.dropdown').length){
		return;
	}

	// Adicione um ouvinte
	$('ul.dropdown li.dropdown_trigger').hover(function(){
		// Mostre o <ul> subsequente
		$(this).find('ul').fadeIn(1);
	},
	function(){
		// Esconda o <ul> subsequente
		$(this).find('ul').hide();
	});
}

// Inicio 
$(document).ready(function(){
	init_dropdown();
});
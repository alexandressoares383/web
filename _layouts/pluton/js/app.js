'use strict';

$(document).ready(function(){

	// Navegação
	var lastId,
		topMenu = $("#top-navigation"),
		topMenuHeight = topMenu.outerHeight(),
		// All lst items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
			var item = $($(this).attr("href"));
			if(item.length){
				return item;
			}
			console.log(item);
		});

	// Get width of container
	var containerWidth = $('.section .container').width();
	// Resize animated triangle
	$('.triangle').css({
		"border-left": containerWidth / 2 + 'px outset transparent',
		"border-right": containerWidth / 2 + 'px outset transparent',
	});
	$(window).resize(function(){
		containerWidth = $('.container').width();
		$(".triangle").css({
			"border-left": containerWidth / 2 + 'px outset transparent',
			"border-right": containerWidth / 2 + 'px outset transparent',
		});
	});


	// Initialize header slider
	$('#da-slider').cslider();


	// Bind to scroll
	$(window).scroll(function(){

		// Display or hide scroll to top menu 
		// if($(this).scrollTop() > 100) {
		// 	$('.scrollup').fadeIn();
		// } else {
		// 	$('.scrollup').fadeOut();
		// }

		/* Menu Fixo */
		if($(this).scrollTop() > 130){
			$('.navbar').addClass('navbar-fixed-top animated fadeInDown');
		} else {
			$('.navbar').removeClass('navbar-fixed-top animated fadeInDown');
		}

		var fromTop = $(this).scrollTop() + topMenuHeight + 10;

		// Get id of current scroll item
		var cur = scrollItems.map(function(){
			if($(this).offset().top < fromTop){
				return this;
			}
		});	

		// Get the id of the current element
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";

		if(lastId !== id){
			lastId = id;
			// Set / remove active class
			menuItems
				.parents().removeClass("active")
				.end().filter("[href=#" + id + "]").parent().addClass("active");
		}
		
	});

});
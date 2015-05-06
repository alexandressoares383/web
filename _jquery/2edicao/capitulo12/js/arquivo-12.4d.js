$(function(){
	$('.abre-fecha').hide();
	$('.foto').each(function(i){
		$(this).replaceWith('<span title="' + $(this).attr('alt') + '">' + (i+1) + '</span>');
		$('#galeria').css('textAlign','center');
	});

	$('<div id="tela"><img src="images/1.jpg" alt="Descrição da foto 1: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi eleifend, purus quis laoreet faucibus, ante augue malesuada mi." /></div>').insertBefore('#galeria');

	$('#galeria a').click(function(event){
		event.preventDefault();

		if(!$('#tela img').is(':animated')){
			$('.legenda').remove();

			var legenda = $(this).children('span').attr('title');

			$('#galeria a').removeClass("corrente");
			$(this).addClass("corrente");
			$('#tela img').attr('src', $(this).text() + '.jpg').css('opacity','0.3').animate({opacity: 1}, 1500, function(){
				$('#tela').append('<p class="legenda">' + legenda + '</p>');
				$('.legenda').css('opacity', 0.6);
			});
		}
	});
});
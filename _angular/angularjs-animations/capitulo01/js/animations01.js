var jsAnimationElement = document.getElementById('jsanimation');
var jsAnimationBtn = document.getElementById('jsBtn');

jsAnimationBtn.addEventListener('click', function moveBtnClickListener(){
	var positionLeft = 0;

	function moveToRight(){
		positionLeft += 10;
		jsAnimationElement.style.left = positionLeft + 'px';

		if(positionLeft < 100){
			setTimeout(moveToRight, 100);
		}
	}

	moveToRight();

}, false);

$('#JQBTN').click(function(){
	$('JQanimation').animate({
		left: "+=100"
	}, 1000);
});

var cssTransitionElement = document.getElementById('csstransition');
var cssTransitionBtn = document.getElementById('cssBtn');

cssTransitionBtn.addEventListener('click', function moveCssBtnClicklistener(){
	cssTransitionElement.classList.add('move-to-right');
});

var cssAnimationElement = document.getElementById('cssanimation');
var cssAnimationBtn = document.getElementById('cssAnimationBtn');

cssAnimationBtn.addEventListener('click', function moveCssAnimationBtnClickListener(){
	cssAnimationElement.classList.add('move-to-right-animation');
});

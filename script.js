
var audio = new Audio('https://olivia-ng.com/codepen/avengers/fingersnap.mp3');

$('label.toggle').on('click',function(){
	audio.play();
	$('.overlay').addClass('false');
	setTimeout(function(){
		$('.main-content').toggleClass('snapped');
	}, 200);
	setTimeout(function(){
		$('.overlay').removeClass('false');
	}, 1000);
	
});

$('label.show-all').on('click',function(){
	$('.main-content').toggleClass('showall');
});

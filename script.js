$(document).ready(function() {
	$('body').fadeTo('slow',1); //Body fades in
	
	$('.cell').mouseenter(function() { //When mouse enters .cell...
		$(this).fadeTo('fast',1); //...Fade from .5 to 1
	});
	$('.cell').mouseleave(function() { //When mouse leaves .cell...
		$(this).fadeTo('fast',0.5); //...Fade back from 1 to .5
	});
});
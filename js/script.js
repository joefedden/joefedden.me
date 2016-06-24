$(document).ready(function() {
	$('body').fadeTo('slow',1);
	
	$('.cell').mouseenter(function() {
		$(this).fadeTo('fast',1);
	});
	$('.cell').mouseleave(function() {
		$(this).fadeTo('fast',0.75);
	});
});
$(document).ready(function() {
	$('body').fadeTo('slow',1);
	
	$('div').click(function() {
		$(this).fadeOut('slow');
	});
});
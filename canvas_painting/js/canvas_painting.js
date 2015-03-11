// JavaScript Document
$(document).ready(function() {
						   
	//variable to hold the color of clicked element					   
	var color_holder = "white";
	
	$('.colors').click(function() {
		color_holder = $(this).css('background-color');
	});
	
	$('.rows').click(function () {
		$(this).css('background-color', color_holder);
	});
	
	
}); //Ends document




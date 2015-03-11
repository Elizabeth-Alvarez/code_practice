// JavaScript Document
$(document).ready(function() {
	$('#button').click(function() {
		$('body').css('background',RandomColor());
	});	
	
	function RandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var colors = '#';
		
		for(var i = 0; i < 6; i++) {
			colors += letters[Math.floor(Math.random() * 16)];
		}
		return colors;
	}

	
});
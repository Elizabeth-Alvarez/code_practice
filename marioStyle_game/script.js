// JavaScript Document
$(document).ready(function () {
	$('#box').click(function() {
		$('.img_box').animate({
			left:'300px',
			bottom: '300px',
			right: '200px',
			top: '100px'
			},'slow');
	});
	
	/*
	$(this).click(function() {
		$('div').animate({bottom:'300px'},'slow');
	});
	
	
	$('#box').click(function(){
		$('#box').animate({bottom:'300px'}, 'slow');
	});
	
	$('#box').click(function(){
		$('#box').animate({top:'300px'}, 'slow');
	});*/
	
	
	
});<!--End of document -->



$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
			    $('img').animate({up:"-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
			    $('img').animate({left: "+=10px"}, 'fast');
				break;
			// Down Array Pressed
			case 40:
			    $('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});
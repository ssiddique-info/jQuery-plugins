$(document).ready(function() {
	
	//Bootstraping variable
	headerWrapper		= parseInt($('#header-wrapper').height());
	offsetTolerance	= 40;
	pointer				= $('.pointer');
	firstNav				= $('.navigation a:first').parent('li');
	defaultPointer		= firstNav.offset().left;
	
	//Move pointer to the first menu
	pointer.css('left', defaultPointer);
	firstNav.addClass('selected-nav2');
	
	//Detecting user's scroll
	$(window).scroll(function() {
	
		//Check scroll position
		scrollPosition	= parseInt($(this).scrollTop());
		
		//Move trough each menu and check its position with scroll position then move the pointer
		$('.navigation a').each(function() {

			thisHref				= $(this).attr('href');
			thisTruePosition	= parseInt($(thisHref).offset().top);
			thisPosition 		= thisTruePosition - headerWrapper - offsetTolerance;
			thisNav				= $('.navigation a[href='+ thisHref +']').parent('li');
			currentPosition	= parseInt(thisNav.offset().left);
			
			if(scrollPosition >= thisPosition) {
			
				$('.selected-nav2').removeClass('selected-nav2');
				pointer.stop().animate({'left': currentPosition});
				thisNav.addClass('selected-nav2');
			}
			
		});
		
		//If we're at the bottom of the page, move pointer to the last section
		bottomPage			= parseInt($(document).height()) - parseInt($(window).height());
		lastNav				= $('.navigation a:last').parent('li');
		currentPosition	= lastNav.offset().left;
		
		if(scrollPosition == bottomPage || scrollPosition >= bottomPage) {
			
			$('.selected-nav2').removeClass('selected-nav2');
			pointer.stop().animate({'left': currentPosition});
			lastNav.addClass('selected-nav2');
		}
		
	});
	
});
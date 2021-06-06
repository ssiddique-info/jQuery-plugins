$(document).ready(function() {
	
	//Bootstraping variable
	headerWrapper		= parseInt($('#header-wrapper').height());
	offsetTolerance	= 40;
	
	//Detecting user's scroll
	$(window).scroll(function() {
	
		//Check scroll position
		scrollPosition	= parseInt($(this).scrollTop());
		
		//Move trough each menu and check its position with scroll position then add selected-nav class
		$('.navigation a').each(function() {

			thisHref				= $(this).attr('href');
			thisTruePosition	= parseInt($(thisHref).offset().top);
			thisPosition 		= thisTruePosition - headerWrapper - offsetTolerance;
			
			if(scrollPosition >= thisPosition) {
				
				$('.selected-nav').removeClass('selected-nav');
				$('.navigation a[href='+ thisHref +']').parent('li').addClass('selected-nav');
				
			}
		});
		
		
		//If we're at the bottom of the page, move pointer to the last section
		bottomPage	= parseInt($(document).height()) - parseInt($(window).height());
		
		if(scrollPosition == bottomPage || scrollPosition >= bottomPage) {
		
			$('.selected-nav').removeClass('selected-nav');
			$('.navigation a:last').parent('li').addClass('selected-nav');
		}
	});
	
});
$(document).ready(function() {
	
	//Bootstrapping variable
	headerWrapper		= parseInt($('#header-wrapper').height());
	offsetTolerance	= 40;
	allNavigation		= $('.section');
	arrayNavigation	= new Array;
	bottomPage			= parseInt($(document).height()) - parseInt($(window).height());

	//Get all menu based on section
	allNavigation.each(function() {
		
		thisNav					= $(this).attr('id');
		thisHref					= $('a[href=#'+thisNav+']').attr('href');
		thisTruePosition		= parseInt($(thisHref).offset().top);
		thisPosition		 	= thisTruePosition - headerWrapper - offsetTolerance;
		
		arrayNavigation.push(thisPosition);
		
	});
	
	//Detecting user's scroll
	$(window).scroll(function() {
		
		//Check scroll position and get displayed section
		scrollPosition	= parseInt($(this).scrollTop());
		thisPosition	= 0;
		
		for(var i=0; i< arrayNavigation.length; i++){
		
			if(scrollPosition >= arrayNavigation[i]) {
				thisPosition =  i;
			}
		}

		//If we're at the bottom of the page, select last section
		if(scrollPosition == bottomPage || scrollPosition >= bottomPage) {
			thisPosition = parseInt(arrayNavigation.length) - 1;
		}

		//Preparing menu to be displayed
		currentElem			= $('.cube:eq('+thisPosition+')');
		currentCube			= currentElem.children('.cube-wrapper');
		currentFront		= currentCube.children('.front');
		currentTop			= currentCube.children('.top');
		
		//Get last displayed menu
		showedElem			= $('.cube:lt('+thisPosition+'), .cube:gt('+thisPosition+')');
		showedCube			= showedElem.children('.cube-wrapper');
		showedFront			= showedCube.children('.front');
				
		if(!currentCube.hasClass('cube-wrapper-show')) {
			
			//Hide other displayed menu
			showedCube.each(function() {
				
				if($(this).hasClass('cube-wrapper-show')) {
						
					$(this).children('.front').removeClass('hide-front');
					$(this).removeClass('cube-wrapper-show').addClass('cube-wrapper-hide');
					$(this).children('.top').removeClass().addClass('top');
				}
			
			});	
			
			//Show selected menu
			currentFront.addClass('front-before-rotate');
			currentCube.addClass('cube-wrapper-show');
			
			//Clean up after animation end
			if($.browser.webkit) {
			
				currentCube.bind('webkitAnimationEnd', function() {
				
					//Clean up last displayed menu
					showedCube.removeClass().addClass('cube-wrapper');
					showedFront.removeClass('front-before-rotate');
				
					//Force menu to be displayed
					currentTop.addClass('showed-top');
					currentFront.addClass('hide-front');
						
					$(this).unbind();
					
				});

			} else {
				
				setTimeout(function(){
					
					showedCube.removeClass().addClass('cube-wrapper');
					showedFront.removeClass('front-before-rotate');
				
					//Force menu to be displayed
					currentTop.addClass('showed-top');
					currentFront.addClass('hide-front');
					
				}, 500);
				
			}	
					
		}

	});	
	
});
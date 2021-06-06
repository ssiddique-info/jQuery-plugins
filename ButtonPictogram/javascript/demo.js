$(document).ready(function() {
	
	$('#container div:nth-child(even)').hide();
	
	$('h3:nth-child(even)').addClass('selected');
	$('h3').on('click', function() {
		
		$(this).addClass('selected').siblings().removeClass('selected');
		$('#container div').hide();
		$('#container div[data-for='+$(this).attr('id')+']').fadeIn();
		
	});
});
$(document).ready(function() {
  
  //Initialize variable
  itemReceiver		= $('#item-receiver'),
  itemList			= $('.item-list'),
  thumbnailWrapper= $('#thumbnail-wrapper'),
  documentWidth	= $(document).width() + 'px';
  
  //Show item list
  $('#plus').on('click', function() {
    
    me  = $(this);
    
    if(!me.hasClass('clicked')) {
    
      me.addClass('clicked');
      thumbnailWrapper.animate({'width': documentWidth}, function() {
        itemList.fadeIn();
      });
      
    } else {
    
      me.removeClass('clicked');
      itemList.fadeOut();
      thumbnailWrapper.animate({'width':'60px'});
    }
  });
  
  //Image on click
  $('.item').on('click', function() {
    
    //Scroll to bottom if overflowing the page height
    $('body').animate({ scrollTop: $(document).height() }, 1000);
    
    //Add to itemReceiver with bouncing effect
    $(this).clone().appendTo(itemReceiver).addClass('show');
    
  });
});
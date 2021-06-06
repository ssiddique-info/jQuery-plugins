$(document).ready(function() {
  
  //Show only first wrapper
  $( '.wrapper-item:not(:first-child)' ).hide();
  
  //Navigation on click
  $( '.nav' ).on( 'click' , function() {
    
    this_index = parseInt($(this).index()) + 1;
    
    $( '.nav' ).removeClass( 'selected' ).end().find( this ).addClass( 'selected' );

    $( '.wrapper-item' ).hide();
    $( '.wrapper-item:nth-child(' + this_index + ')' ).fadeIn( 'fast' );
    
  } );
});
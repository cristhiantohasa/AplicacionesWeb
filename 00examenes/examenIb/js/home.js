'use strict'

$( document ).ready( function(){
    $( '.right' ).on( 'click', function(){
      var currentImg = $( '.active' );
      var nextImg = currentImg.next();
      if( nextImg.length ){
        currentImg.removeClass( 'active' ).css( 'z-index', -10 );
        nextImg.addClass( 'active' ).css( 'z-index', 10 );
      }
    } );
    $( '.left' ).on( 'click', function(){
      var currentImg = $( '.active' );
      var prevImg = currentImg.prev(); 
      if( prevImg.length ){
        currentImg.removeClass( 'active' ).css( 'z-index', -10 );
        prevImg.addClass( 'active' ).css( 'z-index', 10 );
      }
    } );
} );

const xhttp = new XMLHttpRequest();
xhttp.open( 'GET', '../jason/articles.json', true );
xhttp.send();
xhttp.onreadystatechange = function(){
    if( this.readyState == 4 && this.status == 200 ){
        console.log( this.responseText );
    }
}
  
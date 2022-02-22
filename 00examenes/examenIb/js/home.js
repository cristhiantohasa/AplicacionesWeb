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

var xhttp = new XMLHttpRequest();
xhttp.open( 'POST', '../json/articles.json', true );
xhttp.send();
xhttp.onreadystatechange = function(){
    if( this.readyState == 4 && this.status == 200 ){
        let data = JSON.parse( this.responseText );
        let res = document.querySelector('.article-div');
        res.innerHTML = '';
        for( let i of data ){
          res.innerHTML += `
            <div>
              <h2>
                ${i.titulo}
              </h2>
              <span>
                ${i.fecha}
              </span>
              <p>
                ${i.contenido}
              </p>
              <button>
                Leer más...
              </button>
            </div>
            <br>
          `
        }
    }
}
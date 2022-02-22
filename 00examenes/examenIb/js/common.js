'use strict'

const user = document.getElementById('user');
const header = document.querySelector('.header-div');
const nav = document.querySelector('.nav-div');

$( document ).ready( function() {
    $( '.theme1' ).click( function(){
        document.body.style.backgroundImage = "url('../img/fondo1.jpeg')";
        header.style.backgroundColor = "orangered";
        nav.style.backgroundColor = "lightblue";
    } );
} );

$( document ).ready( function() {
    $( '.theme2' ).click( function(){
        document.body.style.backgroundImage = "url('../img/fondo2.jpg')";
        header.style.backgroundColor = "red";
        nav.style.backgroundColor = "lightcoral";

    } );
} );

$( document ).ready( function() {
    $( '.theme3' ).click( function(){
        document.body.style.backgroundImage = "url('../img/fondo3.jpg')";
        header.style.backgroundColor = "blue";
        nav.style.backgroundColor = "skyblue";
    } );
} );

$( document ).ready( function() {
    $( '.top' ).click( function(){
        $( 'body, html' ).animate( {
          scrollTop: '0px'
        }, 500 );
    } );
} );

user.addEventListener( 'submit', ( e ) => {
    e.preventDefault();
    let name = e.target.name.value;
    if ( localStorage.getItem("name") == name )
        console.log( name );
    else
        localStorage.setItem("name", name);
} );
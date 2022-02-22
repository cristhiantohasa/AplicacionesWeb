'use strict'

let title1 = document.querySelector('.title1');
let title2 = document.querySelector('.title2');
let title3 = document.querySelector('.title3');

$( document ).ready( function(){
  $( '.accordion1, .accordion2, .accordion3' ).hide();
  $( '.title1' ).on( 'click', function(){
    $( '.accordion1 ' ).slideToggle();
    title1.style.backgroundColor = "blue";
    title2.style.backgroundColor = "white";
    title3.style.backgroundColor = "white";
    title1.style.color = "white";
    title2.style.color = "black";
    title3.style.color = "black";
  } );
  $( '.title2' ).on( 'click', function(){
    $( '.accordion2 ' ).slideToggle();
    title1.style.backgroundColor = "white"
    title2.style.backgroundColor = "blue"
    title3.style.backgroundColor = "white"
    title1.style.color = "black";
    title2.style.color = "white";
    title3.style.color = "black";
  } );
  $( '.title3' ).on( 'click', function(){
    $( '.accordion3 ' ).slideToggle();
    title1.style.backgroundColor = "white"
    title2.style.backgroundColor = "white"
    title3.style.backgroundColor = "blue"
    title1.style.color = "black";
    title2.style.color = "black";
    title3.style.color = "white";
  } );
} );
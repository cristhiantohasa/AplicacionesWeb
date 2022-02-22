'use strict'

setInterval( () => {
    var watch = document.querySelector( '.time' );
    var currentTime = new Date();
    var hrs = currentTime.getHours();
    if( hrs < 10 )
        hrs = `0${hrs}`;
    var min = currentTime.getMinutes();
    if( min < 10 )
        min = `0${min}`;
    var sec = currentTime.getSeconds();
    if( sec < 10 )
        sec = `0${sec}`;
    watch.innerHTML = `<span>${hrs}:${min}:${sec}</span>`
} )
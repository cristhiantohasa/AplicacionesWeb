'use strict'

var xhttp = new XMLHttpRequest();
xhttp.open( 'GET', 'https://rickandmortyapi.com/api/character/?page=3' );
xhttp.send();
xhttp.onreadystatechange = function(){
    if( this.readyState == 4 && this.status == 200 ){
        let data = JSON.parse( this.response );
        let res = document.querySelector('.friends-div');
        var html = '';
        res.innerHTML = '';
        var abc = [
            ['a', false],['b', false],['c', false],   
            ['d', false],['e', false],['f', false],   
            ['g', false],['h', false],['i', false],   
            ['j', false],['k', false],['l', false],   
            ['m', false],['n', false],['ñ', false],   
            ['o', false],['p', false],['q', false],   
            ['r', false],['s', false],['t', false],   
            ['u', false],['v', false],['w', false],   
            ['x', false],['y', false],['z', false]   
        ]
        var alive = true;
        for( let i of data.results ){
            html += `
                <div class="text-center">
                    <img src="${i.image}"></img>
                </div>
            `;
            html += `
                <div class="text-center">
            `
            if ( i.type != "" ){
                html += `
                    <span>${i.type}</span>
                    <br>
                `;
            }
            html += `
                <span>${i.gender}</span>
                <br>
            `;
            html += `
                <span>${i.url}</span>
            `;
            html += `
                </div>
                <br>
            `;
            res.innerHTML = html;
            console.log( 'name: ' + i.name );
            console.log( 'type: ' + i.type );
            console.log( 'gender: ' + i.gender );
            console.log( 'status: ' + i.status );
            console.log( 'origin-name: ' + i.origin.name );
            console.log( 'location-name: ' + i.location.name );
            console.log( 'episodes: ' + i.episode.length );
            console.log('\n');
            if ( i.status == 'Dead' )
                alive = false;
            for( let j of abc ){
                if( i.name.substring(0,1).toLowerCase() == j[0] )
                    j[1] = true;
            }
        }
        abc.forEach(function(letter, status) {
            console.log(letter, status);
        } )
        console.log( '\n' );
        if( alive )
            console.log( 'Todos los personajes están vivos' );
        else
            console.log( 'No todos los personajes están vivos' );
    }
}
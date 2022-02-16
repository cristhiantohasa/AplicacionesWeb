'use strict'

var mongoose = require( 'mongoose' );
var port = '3600';
var app = require( './app' );

mongoose.connect( 'mongodb://localhost:27017/concesionario' )
.then( () => {
    console.log( "Conexion establecida con la BDD" );
    app.listen( port, () => {
        console.log( "Conexion establecida en el url: localhost:3600" )
    } )
} )
.catch( err => console.log( err ) );
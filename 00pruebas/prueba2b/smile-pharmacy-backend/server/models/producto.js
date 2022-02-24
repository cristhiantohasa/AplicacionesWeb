'use strict'

 var mongoose = require( 'mongoose' );
 var Schema = mongoose.Schema;

 var ProductSchema = Schema( {
     nombre: String,
     precio: Number,
     cantidad: Number,
     promocion: Boolean,
     imagen: String
 } );

 module.exports = mongoose.model( 'productos', ProductSchema );
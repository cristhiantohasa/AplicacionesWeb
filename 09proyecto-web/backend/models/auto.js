'use strict'

 var mongoose = require( 'mongoose' );
 var Schema = mongoose.Schema;

 var AutoSchema = Schema( {
     fabricante:String,
     modelo:String,
     color:String,
     matricula:String,
     anio:Number,
     precio:Number,
     imagen:String
 } );
 module.exports = mongoose.model( 'Auto', AutoSchema );

 // Moongoose toma el 1er parametro lo pone en minuscula y en plural
 // Auto se guarde en la BDD
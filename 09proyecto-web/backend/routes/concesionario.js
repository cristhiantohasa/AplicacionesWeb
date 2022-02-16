'use strict'

var express = require( 'express' );
var ConcesionarioController = require( '../controllers/concesionario' );
var router = express.Router();
var multipart = require( 'connect-multiparty' );
var multiPartMiddleware = multipart( {uploadDir:'./uploads'} );

//  Pagina de inicio
router.get( '/home', ConcesionarioController.home );
//  Guardar informacion de auto
router.post( '/guardar-auto', ConcesionarioController.saveAuto );
//  Ver informacion autos
router.get( '/autos', ConcesionarioController.getAutos );
//  Obtener datos de un auto
router.get( '/auto/:id', ConcesionarioController.getAuto );
//  Eliminar auto
router.delete( '/auto/:id', ConcesionarioController.deleteAuto );
//actualizar auto
router.put( '/auto/:id', ConcesionarioController.updateAuto );
//  Agregar imagenes
router.post( '/subir-imagen/:id', multiPartMiddleware, ConcesionarioController.uploadImagen );
//  Recuperar imagenes
router.get( '/get-imagen/:imagen', ConcesionarioController.getImagen );

module.exports = router;
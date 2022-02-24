'use strict'

var express = require( 'express' );
var FarmaciaController = require( '../controllers/farmacia' );
var router = express.Router();
var multipart = require( 'connect-multiparty' );
var multiPartMiddleware = multipart( {uploadDir:'./server/uploads'} );

router.get( '/read-home', FarmaciaController.home );
router.post( '/create-product', FarmaciaController.createProduct );
router.get( '/read-products', FarmaciaController.readProducts );
router.get( '/read-product/:nombre', FarmaciaController.readProduct );
router.put( '/update-product/:id', FarmaciaController.updateProduct );
router.delete( '/delete-product/:nombre', FarmaciaController.deleteProduct );
router.post( '/upload-image/:id', multiPartMiddleware, FarmaciaController.uploadImage );
router.get( '/read-image/:imagen', FarmaciaController.readImage );

module.exports = router;
'use strict'

var Producto = require( "../models/producto" );
var path = require( "path" );
var fs = require( "fs" );

var controller = {

    home:function( req, res ){
        return res.status( 201 ).send(
           "<h1>Contectado</h1>"
        );
    },

    createProduct:function( req, res ){
        
        var producto = new Producto();
        var params = req.body;

        producto.nombre = params.nombre;
        producto.precio = params.precio;
        producto.cantidad = params.cantidad;
        producto.promocion = params.promocion;
        producto.imagen = null;
        
        producto.save( ( err, storedProduct ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al guardar el producto'} );
            if( !storedProduct ) return res.status( 404 ).send( {message:'No se guardo el producto'} );
            return res.status( 200 ).send( {product: storedProduct} );
        } );

    },

    readProducts:function( req, res ){
        Producto.find( {} ).sort().exec( ( err, products ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al obtener los productos'} );
            if( !products ) return res.status( 404 ).send( {message:'No se obtuvo los productos'} );
            return res.status( 200 ).send( {products} );
        })
    },

    readProduct:function( req, res ){
        var productName = req.params.nombre;
        if( productName == null ) return res.status( 404 ).send( {message:'El producto no existe'} );
        Producto.findOne( {nombre: productName}, ( err, product ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al obtener el producto'+productName} );
            if( !product ) return res.status( 404 ).send( {message:'El producto no existe'+productName } );
            return res.status( 200 ).send( {product} );
        })
    },

    updateProduct:function( req, res ){
        var productId = req.params.id;
        var update = req.body;
        Producto.findByIdAndUpdate( productId, update, {new:true}, ( err, updatedProduct ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al actualizar el producto'} );
            if( !updatedProduct ) return res.status( 404 ).send( {message:'El producto no existe'} );
            return res.status( 200 ).send( {product: updatedProduct} );
        })
    },

    deleteProduct:function( req, res ){
        var productName = req.params.nombre;
        Producto.findOneAndRemove( {nombre: productName},( err, removedProduct ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al eliminar el producto'} );
            if( !removedProduct ) return res.status( 404 ).send( {message:'El producto no existe'} );
            return res.status( 200 ).send( {product: removedProduct} );
        })
    },

    uploadImage:function( req, res ){

        var productId = req.params.id;
        var fileName = "No se subio la imagen";
        
        if( req.files ){
            var filePath = req.files.imagen.path;
            var file_split = filePath.split( '\\' );
            var fileName = file_split[2];
            var extSplit = fileName.split( '\.' );
            var fileExt = extSplit[1];
            if( fileExt == 'png' || fileExt == 'jpg' || fileExt=='jpeg' || fileExt == 'gif' ){
                Producto.findByIdAndUpdate( productId, {imagen: fileName}, {new: true}, ( err, updatedProduct ) => {
                    if( err ) return res.status( 500 ).send( {message:'No se subio la imagen'} );
                    if( !updatedProduct ) return res.status( 404 ).send( {message: 'El producto no existe'} );
                    return res.status( 200 ).send( {product: updatedProduct} );
                });
            } else {
                fs.unlink( filePath, ( err ) => {
                    return res.status( 200 ).send( {message: 'La extension del archivo no es valida'} );
                } );
            }
        }else{
            return res.status( 200 ).send( {message: fileName} );
        }
    },

    readImage:function( req, res ){
        var file = req.params.imagen;
        var path_file = './server/uploads/' + file;
        fs.exists( path_file, ( exists ) => {
            if( exists ){
                return res.sendFile( path.resolve( path_file ) );
            }else{
                return res.status( 200 ).send( {message:'No existe la imagen'} );
            }
        });
    }

}

module.exports = controller;
'use strict'

var Auto = require( "../models/auto" );

var controller = {
    /* router.get( '/', ( req, res ) => {
        res.status( 201 ).send(
            "<h1>Hola mundo</h1>"
        );
    } ); */
    home:function( req, res ){
        return res.status( 201 ).send(
           "<h1>Hola mundo</h1>"
        );
    },
    saveAuto:function( req, res ){
        
        var auto = new Auto();
        var params = req.body;

        auto.fabricante = params.fabricante;
        auto.modelo = params.modelo;
        auto.color = params.color;
        auto.matricula = params.matricula;
        auto.anio = params.anio;
        auto.precio = params.precio;
        auto.imagen = null;
        
        auto.save( ( err, autoStored ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al guardar'} );
            if( !autoStored ) return res.status( 404 ).send( {message:'No se ha guardado el auto'} );
            return res.status( 200 ).send( {auto:autoStored} );
        } );

    },
    getAutos:function( req, res ){
        Auto.find( {} ).sort().exec( ( err, autos ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al recuperar los datos'} );
            if( !autos ) return res.status( 404 ).send( {message:'No hay autos para mostrar'} );
            return res.status( 200 ).send( {autos} );
        })
    },
    getAuto:function( req, res ){
        var autoId = req.params.id;
        if( autoId == null ) return res.status( 404 ).send( {message:'El auto no existe'} );
        Auto.findById( autoId,( err,auto ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al recuperar los datos'} );
            if( !auto ) return res.status( 404 ).send( {message:'El auto no existe'} );
            return res.status( 200 ).send( {auto} );
        })
    },
    deleteAuto:function( req, res ){
        var autoId = req.params.id;
        Auto.findByIdAndRemove( autoId,( err,autoRemoved ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al eliminar los datos'} );
            if( !autoRemoved ) return res.status( 404 ).send( {message:'No se puede eliminar el auto'} );
            return res.status( 200 ).send( {auto:autoRemoved} );
        })
    },
    updateAuto:function( req, res ){
        var autoId = req.params.id;
        var update = req.body;
        Auto.findByIdAndUpdate( autoId, update, {new:true}, ( err, autoUpdate ) => {
            if( err ) return res.status( 500 ).send( {message:'Error al actualizar los datos'} );
            if( !autoUpdate ) return res.status( 404 ).send( {message:'El auto no existe para actualizar'} );
            return res.status( 200 ).send( {auto:autoUpdate} );
        })
    },
    uploadImagen:function( req, res ){

        var autoId = req.params.id;
        var fileName = "Image no subida";
        
        if( req.files ){
            var filePath = req.files.imagen.path;
            var file_split = filePath.split( '\\' );
            var fileName = file_split[1];
            var extSplit = fileName.split( '\.' );
            var fileExt = extSplit[1];
            if( fileExt == 'png' || fileExt == 'jpg' || fileExt=='jpeg' || fileExt == 'gif' ){
                Auto.findByIdAndUpdate( autoId, {imagen:fileName}, {new:true}, ( err, autoUpdated ) => {
                    if( err ) return res.status( 500 ).send( {message:'La imagen no se ha subido'} );
                    if( !autoUpdated ) return res.status( 404 ).send( {message:'El auto no existe y no se subio la imagen'} );
                    return res.status( 200 ).send( {auto:autoUpdated} );
                });
            }else{
                fs.unlink( filePath, ( err ) => {
                    return res.status( 200 ).send( {message:'La extension del archivo no es valida'} );
                } );
            }
        }else{
            return res.status( 200 ).send( {message:fileName} );
        }
    },
    getImagen:function( req, res ){
        var file = req.params.imagen;
        var path_file = './uploads/' + file;
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
/**
 * ArchivoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    uploadFile : function(req, res){
		req.file('file').upload({
			// Directory path where you want to save...
        dirname : 'C:/Users/DELL/Documents/singepro_frontend/app/doc'
		},function(err, file){
			if(err) console.log(err);
			res.json({"status" : "file upload successfully" , "file" :file});
		});
    },
    
    create: function(req, res){
        console.log('entramos a guardar Archivo' + req);

        sails.log.debug(req.allParams())
        Archivo.create(req.allParams()).fetch()
            .then(function(archivo){
                return res.send({
                    'success': true,
                    'message': 'Registro exitoso',
                    'data': archivo

                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'No se pudo registrar'
                })
            })
    },

    get: function(req, res){
        Archivo.find()
            .then(function(archivos){
               
                if(!archivos || archivos.length == 0){
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Se encontraron resultados',
                    'data': archivos

                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Paso un error'
                })
            })
    }



};


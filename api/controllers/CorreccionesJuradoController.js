/**
 * CorreccionesJuradoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    
    create: function(req, res){
        console.log('entro a guardar correccion' + req);

        sails.log.debug(req.allParams())
        Correcciones_jurado.create(req.allParams()).fetch()
            .then(function(correccion){
                return res.send({
                    'success': true,
                    'message': 'Registro exitoso',
                    'data': correccion

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
    
    buscar_correcciones_jurado: async function (req, res) {
        sails.log.debug(req);
        await Correcciones_jurado.find({
            where: { docente: req.param("docente")},
            select: ['*']
        }).populate("proyecto")
        .populate("archivo")
            .then(function (correcciones) {
                if (!correcciones || correcciones.length == 0) {
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Registro de correcciones encontrado',
                    'data': correcciones

                })
            })
            .catch(function (err) {
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'No se pudo encontrar'
                })
            })


    },


    registrar_revision: function (req, res) {
        Correcciones_jurado.update({ docente: req.param("docente"), proyecto: req.param("proyecto") })
            .set({ estado: "Revisado" }).fetch()
            .then(function (correccion) {
                console.log('ACTUALIZADO EL USUARIO: ' + req.param("email"));
                if (!correccion || correccion.length == 0) {
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }else{
                return res.send({
                    'success': true,
                    'message': 'se actualizo',
                    'data': correccion
    
                })
            }
            })
        },

};


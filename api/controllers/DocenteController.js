/**
 * DocenteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    
    get: function(req, res){
        Docente.find()
            .then(function(docentes){
                if(!docentes || docentes.length == 0){
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Se encontraron resultados',
                    'data': docentes

                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Paso un error'
                })
            })
    },

    
    create: function(req, res){
        console.log('entro a guardar docente' + req);

        sails.log.debug(req.allParams())
        Docente.create(req.allParams()).fetch()
            .then(function(docente){
                return res.send({
                    'success': true,
                    'message': 'Registro exitoso',
                    'data': docente

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

    validarexiste: async function (req, res) {
        sails.log.debug(req);
        await Docente.find({
            where: { email: req.param("email") },
            select: ['*']
        })
            .then(function (docente) {
                if (!docente || docente.length == 0) {
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Registro encontrado',
                    'data': docente

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
    
    buscar_por_id: async function (req, res) {
        sails.log.debug(req);
        await Docente.find({
            where: { id: req.param("id") },
            select: ['*']
        })
            .then(function (docente) {
                if (!docente || docente.length == 0) {
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Registro encontradoiiiiiiiiiii',
                    'data': docente

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

    delete: function(req, res){
        sails.log.debug("id...............: " +req.param('id') );
        Docente.destroy({id: req.param('id')})
            .then(function(docente){
                return res.send({
                    'success': true,
                    'message': 'Se elimino',
                    'data': docente
                })
            })
            .catch(function(err){
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'No se pudo eliminar'
                })
            })
    }



};


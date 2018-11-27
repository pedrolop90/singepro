/**
 * SustentacionEstudianteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: function(req, res){
        console.log('entro a guardar sustentacion' + req);

        sails.log.debug(req.allParams())
        Sustentacion_estudiante.create(req.allParams()).fetch()
            .then(function(sustentacion){
                return res.send({
                    'success': true,
                    'message': 'Registro exitoso',
                    'data': sustentacion

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
    buscar_sustentacion_estudiante: async function (req, res) {
        sails.log.debug(req);
        await Sustentacion_estudiante.find({
            where: {estudiante: req.param("estudiante") },
            select: ['*']
        })
        .populate('jurados')
            .then(function (sustentacion) {
                if (!sustentacion || sustentacion.length == 0) {
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Registro de sustentacion encontrado',
                    'data': sustentacion

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

    
    get: function(req, res){
        Sustentacion_estudiante.find()
        .populate('proyecto')
        .populate('estudiante')
        .populate('archivos')
        .populate('jurados')
            .then(function(proyectos){
               
                if(!proyectos || proyectos.length == 0){
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Se encontraron resultados',
                    'data': proyectos

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

    
    update: function (req, res) {
        sails.log.debug(req.param('id'))
        Sustentacion_estudiante.update(req.param('id'), req.allParams()).fetch()
            .then(function (sustentacion) {
                if(!sustentacion || sustentacion.length == 0){
                    return res.send({
                    'success': false,
                    'message': 'No se pudo actualizar nada'
                })
            }
            return res.send({
                'success': true,
                'message': 'Se actualizo la sustentacion',
                'data': sustentacion
            })
            })
            .catch(function (err) {
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'No se actualizo'
                })
            })
    },
    
};


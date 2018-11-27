/**
 * ProyectoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    
    get: function(req, res){
        Proyecto.find().populate('director')
        .populate('estudiantes')
        .populate('jurados')
        .populate('archivo')
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

    
    buscar_por_id: function(req, res){
        console.log("ID DEL PROYECTO: "+req.param("id"));
        Proyecto.find({ where: { id: req.param("id") },
        select: ['*']}).populate('estudiantes')
        .populate('jurados')
        .populate('archivo')
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
  
    create: function(req, res){
        console.log('entramos a guardar proyecto' + req);

        sails.log.debug(req.allParams())
        Proyecto.create(req.allParams()).fetch()
            .then(function(proyecto){
                return res.send({
                    'success': true,
                    'message': 'Registro exitoso',
                    'data': proyecto

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

   
    estudiantes: function(req, res){
        Proyecto.find({
            where: {id: req.param("id")}
          }).populate('estudiantes')
          .populate('director')
          .populate('archivo')
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
        Proyecto.update(req.param('id'), req.allParams()).fetch()
            .then(function (proyecto) {
                if(!proyecto || proyecto.length == 0){
                    return res.send({
                    'success': false,
                    'message': 'No se pudo actualizar nada'
                })
            }
            return res.send({
                'success': true,
                'message': 'Se actualizo el proyecto',
                'data': proyecto
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


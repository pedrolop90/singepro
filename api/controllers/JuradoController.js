/**
 * JuradoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    registrar: function (req, res) {

        //.fetch() permite retornar el objeto recien creado en la BD
        Jurado.create(req.allParams()).fetch()
            .then(function (jurado) {
                return res.send({
                    'success': true,
                    'message': 'Registro exitoso, se registro el Jurado',
                    'data': jurado

                })
            })
            .catch(function (err) {
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'No se pudo registrar'
                })
            })

    },

    get: function (req, res) {
        Jurado.find()
            .then(function (jurados) {
                if (!jurados || jurados.length == 0) {
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Se encontraron resultados',
                    'data': jurados

                })
            })
            .catch(function (err) {
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'Paso un error'
                })
            })
    },
    
    evaluador_docente: async function (req, res) {
        sails.log.debug(req);
        await Jurado.find({
            where: { docente: req.param("docente") },
            select: ['*']
        }).populate('docente')
            .then(function (evaluador) {
                if (!evaluador || evaluador.length == 0) {
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Registro encontrado',
                    'data': evaluador

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

    
    registrar_concepto: function (req, res) {
    Jurado.update({ docente: req.param("docente"), proyecto: req.param("proyecto")  })
        .set({ concepto: req.param("concepto") }).fetch()
        .then(function (jurado) {
            console.log('ACTUALIZADO EL USUARIO: ' + req.param("email"));
            if (!jurado || jurado.length == 0) {
                return res.send({
                    'success': false,
                    'message': 'No se encontro nada'
                })
            }else{
            return res.send({
                'success': true,
                'message': 'se actualizo',
                'data': jurado

            })
        }
        })
    },

    buscar_jurado: async function (req, res) {
        sails.log.debug(req);
        await Jurado.find({
            where: { docente: req.param("docente"), proyecto: req.param("proyecto") },
            select: ['*']
        })
            .then(function (jurado) {
                if (!jurado || jurado.length == 0) {
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Registro de jurado encontrado',
                    'data': jurado

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

    buscar_jurados_proyecto: async function (req, res) {
        sails.log.debug(req);
        await Jurado.find({
            where: {proyecto: req.param("proyecto") },
            select: ['*']
        })
            .then(function (jurado) {
                if (!jurado || jurado.length == 0) {
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Registro de jurado encontrado',
                    'data': jurado

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

    update_proyecto: function (req, res) {
        sails.log.debug(req.param('id'))
        Jurado.update({ nombre: req.param("nombre") })
            .set({proyecto: null })
            .then(function (jurado) {
                return res.send({
                    'success': true,
                    'message': 'Se actualizo'
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

    asignar_caificacion: function (req, res) {
        sails.log.debug(req.param('id'))
        Jurado.update({ docente: req.param("docente"), sustentacion_estudiante: req.param("sustentacion_estudiante") })
            .set({calificacion: req.param("calificacion"), concepto: req.param("concepto") })
            .then(function (jurado) {
                return res.send({
                    'success': true,
                    'message': 'Se actualizo'
                })
            })
            .catch(function (err) {
                sails.log.debug(err)
                return res.send({
                    'success': false,
                    'message': 'No se actualizo'
                })
            })
    }

};


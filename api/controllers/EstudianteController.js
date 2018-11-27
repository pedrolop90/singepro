/**
 * EstudianteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


    get: function (req, res) {
        Estudiante.find()
            .then(function (estudiantes) {
                if (!estudiantes || estudiantes.length == 0) {
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Se encontraron resultados',
                    'data': estudiantes

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


    registrar: function (req, res) {

        //.fetch() permite retornar el objeto recien creado en la BD
        Estudiante.create(req.allParams()).fetch()
            .then(function (usuarios) {
                return res.send({
                    'success': true,
                    'message': 'Registro exitoso, se registro el usuario',
                    'data': usuarios

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


    create: function (req, res) {

        console.log('NOMBRE DEL USUARIO' + req.param("nombre"));

        sails.log.debug(req.allParams());


        Estudiante.find({
            where: { email: req.param("email") },
            select: ['*']
        })
            .then(function (estudiante) {
                if (!estudiante || estudiante.length == 0) {

                    //.fetch() permite retornar el objeto recien creado en la BD
                    Estudiante.create(req.allParams()).fetch()
                        .then(function (usuarios) {
                            return res.send({
                                'success': true,
                                'message': 'Registro exitoso, se registro el usuario',
                                'data': usuarios

                            })
                        })
                        .catch(function (err) {
                            sails.log.debug(err)
                            return res.send({
                                'success': false,
                                'message': 'No se pudo registrar'
                            })
                        })
                } else {


                    console.log('ACTUALIZAR EL USUARIO: ' + req.param("email"));
                    Estudiante.update({ email: req.param("email") })
                        .set({ nombre: '' }).fetch()
                        .then(function (estudiante) {
                            console.log('ACTUALIZADO EL USUARIO: ' + req.param("email"));
                            return res.send({
                                'success': true,
                                'message': 'se actualizo',
                                'data': estudiante

                            })
                        })



                }
            })

    },

    validarexiste: async function (req, res) {
        console.log('entramos a login' + req);
        sails.log.debug(req);
        await Estudiante.find({
            where: { email: req.param("email") },
            select: ['*']
        })
            .then(function (estudiante) {
                if (!estudiante || estudiante.length == 0) {
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Registro encontrado',
                    'data': estudiante

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

    update: function (req, res) {
        sails.log.debug(req.param('id'))
        Estudiante.update(req.param('id'), req.allParams()).fetch()
            .then(function (estudiante) {
                return res.send({
                    'success': true,
                    'message': 'Se actualizo el estudiante',
                    'data': estudiante
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

    update_codigo: function (req, res) {
        sails.log.debug(req.param('id'))
        Estudiante.update({ email: req.param("email") })
            .set({codigo: req.param("codigo") })
            .then(function (estudiante) {
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



}


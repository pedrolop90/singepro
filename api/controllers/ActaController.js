/**
 * ActaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: function(req, res){
        console.log('entro a guardar acta' + req);

        sails.log.debug(req.allParams())
        Acta.create(req.allParams()).fetch()
            .then(function(acta){
                return res.send({
                    'success': true,
                    'message': 'Registro exitoso',
                    'data': acta

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
        Acta.find()
            .then(function(actas){
                if(!actas || actas.length == 0){
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Se encontraron resultados',
                    'data': actas

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


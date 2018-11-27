/**
 * RegistroactaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    create: function(req, res){
        console.log('entro a guardar registro_acta' + req);

        sails.log.debug(req.allParams())
        Registro_acta.create(req.allParams()).fetch()
            .then(function(resgistro){
                return res.send({
                    'success': true,
                    'message': 'Registro exitoso',
                    'data': resgistro

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
        Registro_acta.find()
        .populate(proyecto)
        .populate(acta)
            .then(function(registros){
                if(!registros || registros.length == 0){
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Se encontraron resultados',
                    'data': registros

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

    
    buscar_por_acta: function(req, res){

        Registro_acta.find({ where: { acta: req.param("acta") },
        select: ['*']})
        .populate('proyecto')
            .then(function(registros){
                if(!registros || registros.length == 0){
                    return res.send({
                        'success': false,
                        'message': 'No se encontro nada'
                    })
                }
                return res.send({
                    'success': true,
                    'message': 'Se encontraron resultados',
                    'data': registros

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


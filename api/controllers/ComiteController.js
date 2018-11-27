/**
 * ComiteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    
    
    login: async function(req, res){
        sails.log.debug(req);
         await Comite.find({
            where: {email: req.param("email")},
            select: ['nombre']
          })
          .then(function(comite){
            if(!comite || comite.length == 0){
                return res.send({
                    'success': false,
                    'message': 'No se encontro nada'
                })
            }
            return res.send({
                'success': true,
                'message': 'Registro encontrado',
                'data': comite

            })
        })
        .catch(function(err){
            sails.log.debug(err)
            return res.send({
                'success': false,
                'message': 'No se pudo encontrar, sucedio algo malo'
            })
        })
          
         
    }
  

};


/**
 * CorreccionesJurado.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'Correcciones_jurado',

  attributes: {
    estado: {
      type: 'string'
    },
    jurado: {
      model: 'Jurado'
    },
    docente: {
      model: 'Docente'
    },
    proyecto: {
      model: 'Proyecto'
    },
     archivo: {
      model: 'Archivo'
    },
    fecha: {
      type: 'string',
      columnType: 'datetime'
    }

  
  },

};


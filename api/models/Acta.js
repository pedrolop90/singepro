/**
 * Acta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'acta',

  attributes: {
    numero: {
      type: 'string'
    },
    descripcion: {
      type: 'string'
    },
    fecha: {
      type: 'string',
      columnType: 'datetime'
    },
    registros: {
      collection: 'Registro_acta',
      via: 'acta'
    }
  },

};


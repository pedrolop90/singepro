/**
 * Registro_acta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'registro_acta',

  attributes: {
    descripcion: {
      type: 'string',
      columnType: 'varchar (500)'
    },
    fecha: {
      type: 'string',
      columnType: 'datetime'
    },
    acta: {
      model: 'Acta'
    },
    proyecto: {
      model: 'Proyecto'
    }
  },

};


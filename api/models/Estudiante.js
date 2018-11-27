/**
 * Estudiante.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'estudiante',

  attributes: {
    nombre: {
      type: 'string'
    },
    codigo: {
      type: 'string'
    },
    email :{
      type: 'string'
    },
    owner: {
      model: 'Proyecto'
    },
    archivos: {
      collection: 'Archivo',
      via: 'estudiante'
    },
    sustentacion: {
      collection: 'Sustentacion_estudiante',
      via: 'estudiante'
    },
  },

};


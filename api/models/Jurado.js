/**
 * Jurado.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'jurado',

  attributes: {
    calificacion: {
      type: 'string'
    },
    tipo: {
      type: 'string'
    },
    concepto :{
      type: 'string'
    },
    nombre :{
      type: 'string'
    },
    docente: {
      model: 'Docente'
    },
    proyecto: {
      model: 'Proyecto'
    },
    sustentacion_estudiante: {
      model: 'Sustentacion_estudiante'
    },
     archivos: {
      collection: 'Archivo',
      via: 'jurado'
    },
    correcciones: {
      collection: 'Correcciones_jurado',
      via: 'jurado'
    },

  
  },

  };



/**
 * Sustentacion_estudiante.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

 
  tableName: 'sustentacion_estudiante',

  attributes: {
    estado: {
      type: 'string'
    },
    estudiante: {
      model: 'Estudiante'
    },
    proyecto: {
      model: 'Proyecto'
    },
    archivos: {
      collection: 'Archivo',
      via: 'sustentacion'
    },
    fecha: {
      type: 'string',
      columnType: 'datetime'
    }, 
    jurados: {
      collection: 'Jurado',
      via: 'sustentacion_estudiante'
    },
     fecha_sustentacion: {
      type: 'string',
      columnType: 'datetime'
    },
    calificacion:{
      type: 'string'
    }

  
  },
};


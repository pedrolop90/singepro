/**
 * Archivo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'archivo',

  attributes: {
    nombre: {
      type: 'string'
    },
   
    ruta: {
      type: 'string'
    },
     fecha: {
      type: 'string',
      columnType: 'datetime'
    },
    estudiante: {
      model: 'Estudiante'
    },
    jurado: {
      model: 'Jurado'
    },
    proyecto: {
      model: 'Proyecto'
    },
    descripcion: {
      type: 'string'
    },
    correcciones: {
      collection: 'Correcciones_jurado',
      via: 'archivo'
    },
    sustentacion: {
      model: 'Sustentacion_estudiante'
    }
  },


};


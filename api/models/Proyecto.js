/**
 * Proyecto.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'proyecto',

  attributes: {
    nombre: {
      type: 'string'
    },
    modalidad: {
      type: 'string'
    },
    fecha_inicio: {
      type: 'string',
      columnType: 'datetime'
    },
    estado: {
      type: 'string'
    },
    fecha_fin: {
      type: 'string',
      columnType: 'datetime'
    },
    prorroga: {
      type: 'string',
      columnType: 'datetime'
    },
    sustentacion: {
      type: 'string',
      columnType: 'datetime'
    },
    calificacion: {
      type: 'number',
    },
    concepto: {
      type: 'string'
    },
    fecha_calificacion: {
      type: 'string',
      columnType: 'datetime'
    },
    estudiantes: {
      collection: 'Estudiante',
      via: 'owner'
    },
    director: {
      model: 'Docente'
    },
     jurados: {
      collection: 'Jurado',
      via: 'proyecto'
    },
    archivo: {
      collection: 'Archivo',
      via: 'proyecto'
    },
    acciones: {
      collection: 'Registro_acta',
      via: 'proyecto'
    },
    correcciones: {
      collection: 'Correcciones_jurado',
      via: 'proyecto'
    },

  },


};


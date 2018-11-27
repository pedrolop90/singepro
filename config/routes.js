/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

 '/': {
  view: 'pages/homepage'
},
'/proyecto/create':{
  controller: 'ProyectoController', action: 'create'
},
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

 'GET /api/proyecto': 'ProyectoController.get',
 
 'POST /api/Proyecto/login': 'ProyectoController.estudiantes',
 
 'POST /api/Estudiante/validarexiste': 'EstudianteController.validarexiste',

 'POST /api/Docente/validarexiste': 'DocenteController.validarexiste',

 'POST /api/Comite/login': 'ComiteController.login',

 'PUT /api/Estudiante/actualizar': 'EstudianteController.update',

 'POST /api/proyecto/buscar_por_id': 'ProyectoController.buscar_por_id',
 
 'POST /api/Estudiante/registrar': 'EstudianteController.create',

 'PUT /api/Estudiante/actualizar_codigo': 'EstudianteController.update_codigo',
  
 'POST /api/Jurado/registrar': 'JuradoController.registrar',

 'POST /api/Jurado/evaluador_docente': 'JuradoController.evaluador_docente',

 'POST /api/Jurado/concepto': 'JuradoController.registrar_concepto',

 'POST /api/Jurado/buscar': 'JuradoController.buscar_jurado',

 'POST /api/Jurado/buscar_por_proyecto': 'JuradoController.buscar_jurados_proyecto',

 'PUT /api/Jurado/update_proyecto': 'JuradoController.update_proyecto',

 'POST /api/docente/buscar_por_id': 'DocenteController.buscar_por_id', 

 'GET /api/docente/get': 'DocenteController.get',

 'PUT /api/proyecto/actualizar': 'ProyectoController.update',

 'POST /api/archivo/upload': 'ArchivoController.uploadFile',
 
 'POST /api/archivo/create': 'ArchivoController.create',

 'GET /api/archivo/listar': 'ArchivoController.get',

 'POST /api/registro_acta/buscar_por_acta': 'RegistroactaController.buscar_por_acta',

 'POST /api/registro_acta/create': 'RegistroactaController.create',

 'GET /api/registro_acta/get': 'RegistroactaController.get',
 
 'POST /api/acta/create': 'ActaController.create',

 'GET /api/acta/listar': 'ActaController.get',

 'POST /api/correccionjurado/create': 'CorreccionesJuradoController.create',

 'POST /api/correccionjurado/buscar': 'CorreccionesJuradoController.buscar_correcciones_jurado',

 'PUT /api/correccionesjurado/registrar_revision': 'CorreccionesJuradoController.registrar_revision',

 'POST /api/sustentacion/create': 'SustentacionEstudianteController.create',

 'POST /api/sustentacion/buscar_sustentacion_estudiante': 'SustentacionEstudianteController.buscar_sustentacion_estudiante',
 
 'GET /api/sustentacion/get': 'SustentacionEstudianteController.get',

 'PUT /api/sustentacion/update': 'SustentacionEstudianteController.update',

 'PUT /api/jurado/asignar_caificacion': 'JuradoController.asignar_caificacion',

 'DELETE /api/docente/delete/id:' : 'DocenteController.delete', 

 //TODO LO QUE SE ENVIA POR LA URL DEL NAVEGADOR SE TOMA COMO GET ASI LLEVE PARAMETROS
};

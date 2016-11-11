angular
  .module('app')
  .factory('FactoryRutas', function () {
    var objeto = {};
    objeto.nombre = 'Factory de Rutas';
    objeto.ApiDeBanderas = "http://www.egos27.somee.com/api/bandera";

    return objeto;
  })
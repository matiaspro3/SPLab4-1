angular
  .module('abmapp')
  .factory('FactoryRutas', function () {
    var objeto = {};
    objeto.nombre = 'Factory de Rutas';
    objeto.ApiDeBanderas = "http://www.egos27.somee.com/api/bandera";

    return objeto;
  })
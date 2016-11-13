angular
  .module('abmapp')
  .factory('FactoryBandera', function ($http) {
    var objeto = {};
    objeto.nombre = 'FactoryDeBanderas';
    objeto.traerTodos = TraerTodos;
    var Url="http://www.egos27.somee.com/api/bandera"; //origen de datos.

    return objeto;

    function traerURL(){ //función privada tipo "get" atributo.
        return Url;
    }

    function TraerTodos(){
      return $http.get(traerURL()).then(
          function(respuesta){
            console.info("RESPUESTA (en service): ", respuesta);
            return respuesta;
          },
          function(error){
            console.info("ERROR!", error);
            return error;
          }
        );
    }
  })
angular
  .module('abmapp')
  .factory('FactoryConServicioBandera', function (bandera) {
    var objeto = {};
    objeto.nombre = 'FactoryDeBanderas';
    objeto.traerTodos = TraerTodos;
    var Url="http://www.egos27.somee.com/api/bandera"; //origen de datos.

    return objeto;

    function traerURL(){ //función privada tipo "get" atributo.
        return Url;
    }

    function TraerTodos(){
      console.info("Banderita", bandera);
      return bandera.traerTodo();
    }
  })
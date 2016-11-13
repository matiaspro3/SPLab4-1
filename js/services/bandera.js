angular
  .module('abmapp')
  .service('bandera', function ($http, FactoryRutas) {
    this.Nombre="servicio bandera";

    var Url=FactoryRutas.ApiDeBanderas; //origen de datos.
    
    /*this.traerSoloImagen= traerSoloImagen;
    this.traerSoloImagen = function(){

    }*/

    function traerURL(Parametro){ //función privada tipo "get" atributo.
      if(!Parametro)
        return Url;
      else
        return Url+"/"+Parametro;
    }

    this.traerUnPais = function(Parametro){
       return $http.get(traerURL(Parametro)).then(
          //Funciones que son parámetros, con lo cual se separan por coma.
          function(respuesta){
            console.info("RESPUESTA (en service): ", respuesta);
            return respuesta; //MAL= respuesta.Paises
          },
          function(error){
            console.info("ERROR!", error);
            return error;
          }
        );
      }

    this.traerTodo = function () {
       return $http.get(traerURL()).then(
          //Funciones que son parámetros, con lo cual se separan por coma.
          function(respuesta){
            console.info("RESPUESTA (en service): ", respuesta);
            return respuesta;
          },
          function(error){
            console.info("ERROR!", error);
            return error;
          }
        );
        //Se retorna la "promesa" al controller y luego los datos de dicha promesa en respuesta (1er parámetro)
    }
  })
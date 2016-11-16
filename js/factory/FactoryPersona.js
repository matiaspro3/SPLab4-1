angular
  .module('abmapp')
  .factory('FactoryPersona', function (servicioABM) {
    var objeto = {};
    objeto.nombre = 'FactoryDePersonas';
    objeto.TraerTodas = TraerTodas;
    objeto.Borrar = Borrar;
    objeto.Alta = Alta;
    objeto.Modificar = Modificar;
    

    return objeto;


    function TraerTodas(){
//      console.info("FactoryPersona");
      return servicioABM.Cargar();
    }
  




 function Borrar(persona){
    //  console.info("FactoryPersona");
      return servicioABM.Borrar(persona);
    }


 function Alta(persona){
    //  console.info("FactoryPersona");
      return servicioABM.Alta(persona);
    }


 function Modificar(persona){
    //  console.info("FactoryPersona");
      return servicioABM.Modificar(persona);
    }



  })
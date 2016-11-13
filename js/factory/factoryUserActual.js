angular
.module('abmapp')
.factory('factoryUserActual', function(servicioUser) {
    var objeto = {};
 objeto.nombre = 'FactoryDeUsuarios';

    objeto.TraerTodas = TraerTodas;
    objeto.Borrar = Borrar;
    objeto.Alta = Alta;
    objeto.Modificar = Modificar;

    



    return objeto;



   function TraerTodas(){
//      console.info("FactoryPersona");
      return servicioUser.Cargar();
    }

  



 function Borrar(persona){
    //  console.info("FactoryPersona");
      return servicioUser.Borrar(persona);
    }


 function Alta(persona){
    //  console.info("FactoryPersona");
      return servicioUser.Alta(persona);
    }


 function Modificar(persona){
    //  console.info("FactoryPersona");
      return servicioUser.Modificar(persona);
    }





















});
angular.module('abmapp')
.service('servicioABM', function($timeout,$http) {
    this.Nombre = "Servicio ABM";
   this.Borrar = Borrar;
    this.Cargar = Cargar;
    this.Alta = Alta;
    this.Modificar =Modificar;

  

    function Cargar(){
      
      
    return $http.get('http://localhost/lab/ws/personas')
    .then(function(respuesta) {       
      
    return respuesta.data;
      


      },function errorCallback(response) {
           return response; 
          
          
                                 }
   
   )


    }
  

  

    function Alta(persona){
      
      
    return  $http.post('http://localhost/lab/ws/alta/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      


      },function errorCallback(response) {
           return response; 
          
          
                                 }
   
   )


    }






    function Borrar(persona){
      
      
    return    $http.delete('http://localhost/lab/ws/personas/' + JSON.stringify(persona.id))
    .then(function(respuesta) {       
      
    return respuesta.data;
      


      },function errorCallback(response) {
           return response; 
          
          
                                 }
   
   )


    }
  

    function Modificar(persona){
      
      
    return    $http.put('http://localhost/lab/ws/modificarPerson/' + JSON.stringify(persona))
    .then(function(respuesta) {       
      
    return respuesta.data;
      


      },function errorCallback(response) {
           return response; 
          
          
                                 }
   
   )


    }

   







  })
angular.module('abmapp.controllersUsuario', [])

app.controller('controlPersonaMenu', function($scope, $http) {
  $scope.DatoTest="**Menu**";

});

app.controller('controlMenu', function($scope, $http) {
  $scope.DatoTest="**Menu**";
});
app.controller('controlInicio', function($scope, $http) {
  $scope.DatoTest="**Menu**";
  $scope.titulo="Inicio y presentacion de la WEB";
  //TENGO QUE VALIDAR SI ESTA AUTENTICADO
/*  if($auth.isAuthenticated())
    //muestro los botones para que ingrese al sistema
  else
    //le pido que se loguee*/
  
});



app.controller('controlUsuario', function($scope, $http,$auth,$state) {
 if($auth.isAuthenticated()){
          $scope.selogueo=true;
        }
        else{
          $scope.selogueo=false;
        }

  $scope.Grilla=function(){
     
  $state.go("usuario.grilla");


  }








});







app.controller('DirectivaCtrl', function($scope, data, i18nService, uiGridConstants) {
           $scope.ola = "El titulo Scope";
    
  $scope.listadoDeBanderas = [];


 
    console.info("FactoryConServicioBandera", FactoryConServicioBandera);

    var json;
 


   FactoryConServicioBandera.traerTodos().then(function(rta){
console.info("sadasdsadsa", rta);
      $scope.listadoDeBanderas = rta.data.Paises;
      console.info($scope.listadoDeBanderas);
    });
    
});

















app.controller('controlUsuarioMenu', function($scope, $http,$auth,$state) {
        
  if($auth.isAuthenticated()){
          $scope.selogueo=true;
    
        }
        else{
      
          $scope.selogueo=false;
        }

  $scope.Desloguearse = function(){
        $auth.logout();

     $state.go("inicio");
}

});

app.controller('controlUsuarioLogin', function($scope, $http, $auth, $state) {

  $scope.usuario = {};
  $scope.usuario.usuario = "";
  $scope.usuario.dni = "";
  $scope.usuario.password = "";

  $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
        console.log("rompió github!");
      });
    }

  /*if($auth.isAuthenticated())
    console.info("token", $auth.getPayload());
  else
    console.info("no token", $auth.getPayload());*/

  $scope.Login = function(){

    //Esto es una llamada equivalente a $http
    console.log($scope.usuario);
    $auth.login($scope.usuario)
    .then(function(response) {
        console.info("correcto", response);

        //CHEQUEO DE SESION ACTIVA O NO
        if($auth.isAuthenticated()){
          console.info("token", $auth.getPayload());
          alert("LOGUEADO!");
          $state.go("inicio");
        }
        else{
          console.info("no token", $auth.getPayload());
          alert("Usuario NO registrado.");
          $state.go("usuario.registrarse");
        }
          
      // Redirect user here after a successful log in.
    })
    .catch(function(response) {
        console.info("incorrecto", response);
      // Handle errors here, such as displaying a notification
      // for invalid email and/or password.
    });
    
  }

});

app.controller('controlUsuarioRegistrarse', function($scope, $http, FileUploader, $state) {
  
 
  

  $scope.Guardar=function(){
  
      console.log("usuario a guardar:");
      console.log($scope.usuario);


    $http.post('PHP/nexo.php', { datos: {accion :"insertarUser",usuario:$scope.usuario}})
    .then(function(respuesta) {       
       //aca se ejetuca si retorno sin errores        
     console.info("respuesta", respuesta.data);
     $state.go("inicio");

  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log( response);           
    });

  console.info("Ya guardé el archivo.");



  }

});



app.controller('controlUsuarioGrilla', function($scope, $http, $state, $auth) {
    
   


  $scope.Traer=function(){
    $http.get('PHP/nexo.php', { params: {accion :"traerUser"}})
    .then(function(respuesta) {       

           $scope.ListadoUsers = respuesta.data.listado;
           console.log(respuesta.data);

      },function errorCallback(response) {
           $scope.ListadoUsers= [];
          console.log( response);
          
     });
  }

  $scope.Traer();

  $scope.Borrar=function(usuario){
    console.log("borrar"+usuario.id);
    $http.post("PHP/nexo.php",{ datos:{accion :"borrarUser", usuario:usuario, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}})
    .success(function(data, status, headers, config) {
        console.log("bien"+data);
        $scope.Traer();
      }).error(function(data, status, headers, config) {
         console.log("mal"+data);
    });


  }

  $scope.Modificar=function(id){
    
    console.log("Modificar"+id);
  }

});





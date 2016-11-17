angular.module('abmapp.controllersUsuario', [])


app.controller('controlMenu', function($scope, $http) {
  $scope.DatoTest="**Menu**";
});
app.controller('controlInicio', function($scope, $http,factoryUserActual) {
  $scope.DatoTest="**Menu**";
  
  //TENGO QUE VALIDAR SI ESTA AUTENTICADO
/*  if($auth.isAuthenticated())
    //muestro los botones para que ingrese al sistema
  else
    //le pido que se loguee*/

   $scope.user = factoryUserActual.Logueado;
  console.info("user...",$scope.user );
});



app.controller('controlUsuario', function($scope, $http,$auth,$state,factoryUserActual) {
 if($auth.isAuthenticated()){
          $scope.selogueo=true;

        }
        else{
          $scope.selogueo=false;
        }
  
   $scope.user = factoryUserActual.Logueado;
   console.info("userCONTROL...",$scope.user );
  $scope.Grilla=function(){
   
  $state.go("usuario.grilla");


  }








});



app.controller('controlUsuarioMenu', function($scope, $http,$auth,$state,factoryUserActual) {
        /*
  if($auth.isAuthenticated()){
          $scope.selogueo=true;
    
        }
        else{
      
          $scope.selogueo=false;
        }
*/


$scope.user =factoryUserActual.Logueado;



  $scope.Desloguearse = function(){
        $auth.logout();
$scope.user ="";
factoryUserActual.Logueado= "";
     $state.go("inicio");
}

});

app.controller('controlUsuarioLogin', function($scope, $http, $auth, $state,factoryUserActual) {

  $scope.usuario = {};
//  $scope.usuario.usuario = "lala";
// $scope.usuario.dni = 5656;
//  $scope.usuario.password = 2222;

  $scope.Admin = function(){
  $scope.usuario.usuario = "matias";
  $scope.usuario.dni = 32935835;
  $scope.usuario.email = "admin@admin";
  $scope.usuario.password = 4444;
  $scope.usuario.tipo= "admin";
  }


  $scope.Vende = function(){
  $scope.usuario.usuario = "florinda";
  $scope.usuario.dni = 7878;
  $scope.usuario.email = "vend@vend";
  $scope.usuario.password = 7878;
  $scope.usuario.tipo= "vend"; 
  }
 
  $scope.Compra = function(){
  $scope.usuario.usuario = "pedro";
  $scope.usuario.dni = 1212;
  $scope.usuario.email = "comp@comp";
  $scope.usuario.password = 4545;
  $scope.usuario.tipo= "comp"; 
  }






  $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
      .then(function(response) {
        console.info("autenticatee",response);
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
    console.info("userrrrrrrrr...",$scope.usuario);
    $auth.login($scope.usuario)
    .then(function(response) {
        console.info("correcto", response);

        //CHEQUEO DE SESION ACTIVA O NO
        if($auth.isAuthenticated()){
          console.info("token", $auth.getPayload());
          factoryUserActual.Logueado= $auth.getPayload();
          
          //$scope.userActual= $auth.getPayload();
          //console.info("$scope.userActual", $scope.userActual);
          //console.info("$scope.userActual.perfil", $scope.userActual.perfil);
          

          alert("LOGUEADO!");
            //factoryUserActual.Logueado=$scope.usuario;

          $state.go("inicio");
        }
        else{
          console.info("no token", $auth.getPayload());
          //alert("Usuario NO registrado.");
          //$state.go("usuario.registrarse");
          alert("Usuario NO registrado.Contacte al ADMIN para que lo ingrese");
          $state.go("inicio");


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

app.controller('controlUsuarioRegistrarse', function($scope, $http, FileUploader, $state,factoryUserActual) {
  

  $scope.Guardar=function(){
  
      console.log("usuario a guardar:");
      console.log($scope.usuario);
/*
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
 

*/

factoryUserActual.Alta($scope.usuario).then(function(rta){
    console.info("ALTA ookk...");
     alert("User Registrado");
   $state.go("inicio");
    
   });

}

});



app.controller('controlUsuarioGrilla', function($scope, $http, $state, $auth,factoryUserActual) {
    
   


  $scope.Traer=function(){

/*
    $http.get('PHP/nexo.php', { params: {accion :"traerUser"}})
    .then(function(respuesta) {       

           $scope.ListadoUsers = respuesta.data.listado;
           console.log(respuesta.data);

      },function errorCallback(response) {
           $scope.ListadoUsers= [];
          console.log( response);
          
     });
  
*/

   factoryUserActual.TraerTodas().then(function(rta){
        $scope.ListadoUsers = rta;
  console.info('funco la factory usuariossss..',$scope.ListadoUsers);
    });

  }

  $scope.Traer();

  $scope.Borrar=function(usuario){
/*    console.log("borrar"+usuario.id);
    $http.post("PHP/nexo.php",{ datos:{accion :"borrarUser", usuario:usuario, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}})
    .success(function(data, status, headers, config) {
        console.log("bien"+data);
        $scope.Traer();
      }).error(function(data, status, headers, config) {
         console.log("mal"+data);
    });
*/


   factoryUserActual.Borrar(usuario).then(function(rta){
  console.info('boreeeeeee  usuariossss..');
        $scope.Traer();
    });




  }

  $scope.Modificar=function(usuario){
    
    //console.info("Modificar persona....",usuario);
    $state.go('usuario.modificar', {objUser:usuario});
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




app.controller('usuarioRegistrarseMOD', function($scope, $http,FileUploader, $state,$stateParams, factoryUserActual) {
  $scope.user={};

  $scope.user.id = Number($stateParams.objUser.id);
  console.info($scope.user);
  $scope.user.usuario = $stateParams.objUser.usuario;
  $scope.user.dni = Number($stateParams.objUser.dni);
  $scope.user.password = Number($stateParams.objUser.password);
  $scope.user.perfil = $stateParams.objUser.tipo;






  $scope.Modificar=function(){


   factoryUserActual.Modificar($scope.user).then(function(rta){
    console.info("Modificar ookk...");
      $state.go('usuario.grilla');
  }
)}


  });
 



angular.module('abmapp.controllersPersona', [])

app.controller('controlPersonaMenu', function($scope, $http) {
  $scope.DatoTest="**Menu**";

});






app.controller('controlPersona', function($scope, $http, $auth, $state,factoryUserActual) {
   /*if(!$auth.isAuthenticated())
   {
    $scope.DatoTest="**NO TOKEN**";
    alert("Debe iniciar sesion!");
    $state.go("inicio");
   }
*/






   $scope.user = factoryUserActual.Logueado;
   console.info("user personaaaa...",$scope.user );

});


app.controller('controlPersonaVotacion', function($scope, $http, FileUploader, $state,FactoryPersona) {
  $scope.persona={};
  $scope.persona.fecha;
  $scope.persona.dni=36666666;
  $scope.persona.partido;
  $scope.persona.sexo='f';
  $scope.persona.foto='pordefecto.png';



  // $scope.uploader=new FileUploader({url:'PHP/nexo.php'});
 $scope.uploader=new FileUploader({url:'servidor/archivos.php'});
//$scope.uploader=new FileUploader({url:'servidor/archivos.php',data:{ user: {foto:$scope.persona.foto}}});



$scope.uploader.onAfterAddingFile = function(item) {
  //var fileExtension = '.' + item.file.name.split('.').pop();
  //item.file.name = Math.random().toString(36).substring(7) + new Date().getTime() + fileExtension;

  item.file.name =$scope.persona.dni+'.jpg';
};

$scope.uploader.onSuccessItem=function(item, response, status, headers)
  {

       $scope.uploader.onBeforeUploadItem(item);
/*
    $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
    .then(function(respuesta) {       
       //aca se ejetuca si retorno sin errores        
     console.info("respuesta", respuesta.data);
     alert("VOTO REGISTRADO!");
     $state.go("inicio");
    
  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log( response);           
    });

  console.info("Ya guardé el archivo.", item, response, status, headers);
*/  };




  $scope.Votar=function(){


    console.log($scope.uploader.queue);
      if($scope.uploader.queue[0]!=undefined)
      {
        var nombreFoto = $scope.uploader.queue[0]._file.name;
        $scope.persona.foto= $scope.persona.dni+'.jpg';
     //$scope.persona.foto= nombreFoto;
      }

     // $scope.uploader.uploadAll();
      console.info("persona a guardar SLIM:    .......",$scope.persona);
      

   //$http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
   /* $http.post('http://localhost/lab/ws/alta/' + JSON.stringify($scope.persona))

    .then(function(respuesta) { 

       //aca se ejetuca si retorno sin errores        
     console.info("respuesta SLIM", respuesta);
     alert("VOTO REGISTRADO SLIM!");
     $state.go("inicio");
    
  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log( response);           
    });

*/

   /* console.log("persona a guardar:");
    console.log($scope.persona);

    
    $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
    .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });*/

FactoryPersona.Alta($scope.persona).then(function(rta){
    console.info("ALTA ookk...");
     alert("VOTO REGISTRADO SLIM!");
     $state.go("persona.grilla");
    
   });




  }


  




});




app.controller('controlPersonaGrilla', function($scope, $http, $state, $auth,FactoryPersona,factoryUserActual) {
    
   
   $scope.user = factoryUserActual.Logueado;



  $scope.Traer=function(){/*
//    $http.get('PHP/nexo.php', { params: {accion :"traer"}})
  $http.get('http://localhost/lab/ws/personas')
    .then(function(respuesta) {       
           $scope.ListadoPersonas = respuesta.data;
         console.info('listado de personas...',$scope.ListadoPersonas);
    },function errorCallback(response) {
           $scope.ListadoPersonas= [];
          console.log( response);
          
     });
  */

   FactoryPersona.TraerTodas().then(function(rta){
     $scope.ListadoPersonas= rta;
  console.info('funco la factory22..',$scope.ListadoPersonas);
    });
    
    

}

  $scope.Traer();

  $scope.Borrar=function(persona){
  //  console.info("borrar...",persona.id);
    //$http.post("PHP/nexo.php",{ datos:{accion :"borrar", persona:persona, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}})

   FactoryPersona.Borrar(persona).then(function(rta){
    console.info("borrarad ookk...");
      $scope.Traer();
   });

  }



  $scope.Modificar=function(persona){
    
    console.info("Modificar persona....",persona);
    $state.go('persona.modificarVotacion', {objPersona:persona});
  }

});


app.controller('controlPersonaVotacionMOD', function($scope, $http,FileUploader, $state,$stateParams, FactoryPersona) {
  $scope.persona={};
  $scope.persona.id = Number($stateParams.objPersona.id);
  
  
  $scope.persona.dni = Number($stateParams.objPersona.dni);
  $scope.persona.partido=$stateParams.objPersona.partido;
   //$("#fechaNac").val($stateParams.objPersona.fecha);
  $scope.persona.sexo=$stateParams.objPersona.sexo;
  $scope.persona.foto=$stateParams.objPersona.foto;

 $scope.uploader=new FileUploader({url:'servidor/archivos.php'});


$scope.uploader.onAfterAddingFile = function(item) {
  item.file.name =$scope.persona.dni+'.jpg';
};

$scope.uploader.onSuccessItem=function(item, response, status, headers)
  {
       $scope.uploader.onBeforeUploadItem(item);
 };





  $scope.Modificar=function(){
/*
   console.info("persona a Modificar:...",$scope.persona);

    $http.put('http://localhost/lab/ws/modificar/' + JSON.stringify($scope.persona))
    .then(function(respuesta) {        
         console.info("MODIFICÓ BIEN", respuesta);
         $state.go('persona.grilla');
    },function errorCallback(response) {        
        console.info("MODIFICÓ MAL", response);           
    });


*/


   FactoryPersona.Modificar($scope.persona).then(function(rta){
    console.info("Modificar ookk...");
      $state.go('persona.grilla');
   });



  }
$scope.BorrarFoto=function(){

    if($scope.persona.foto!="pordefecto.png")
            {
                unlink("../fotos/".$$scope.persona.foto)
        }else (alert('No puede elimiar la foto por defecto.'))


}


  




});

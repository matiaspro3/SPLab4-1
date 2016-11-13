angular.module('abmapp.controllersPersona', [])

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






app.controller('controlPersona', function($scope, $http, $auth, $state) {
   /*if(!$auth.isAuthenticated())
   {
    $scope.DatoTest="**NO TOKEN**";
    alert("Debe iniciar sesion!");
    $state.go("inicio");
   }
*/
});



/*
app.controller('controlPersonaVotacion', function($scope, $http, FileUploader, $state) {
  $scope.persona={};
  $scope.persona.fecha;
  $scope.persona.dni;
  $scope.persona.partido;
  $scope.persona.sexo;
  $scope.persona.foto;
  //$scope.uploader=new FileUploader({url:'servidor/archivos.php'});
$scope.uploader=new FileUploader({url:'PHP/nexo.php'});
  $scope.Votar=function(){


    console.log($scope.uploader.queue);
      if($scope.uploader.queue[0]!=undefined)
      {
        var nombreFoto = $scope.uploader.queue[0]._file.name;
        $scope.persona.foto=nombreFoto;
      }

      $scope.uploader.uploadAll();
      console.log("persona a guardar:");
      console.log($scope.persona);
  
   
    
    $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
    .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores 
         alert("VOTO REGISTRADO!");       
         console.log(respuesta.data);

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });
  }

  $scope.uploader.onSuccessItem=function(item, response, status, headers)
  {

   /* $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
    .then(function(respuesta) {       
       //aca se ejetuca si retorno sin errores        
     console.info("respuesta", respuesta.data);
     alert("VOTO REGISTRADO!");
     $state.go("inicio");
   
  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log( response);           
    });
//**///
/*
  console.info("Ya guardé el archivo.", item, response, status, headers);
  };

});




*/

app.controller('controlPersonaVotacion', function($scope, $http, FileUploader, $state) {
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
    $http.post('http://localhost/lab/ws/alta/' + JSON.stringify($scope.persona))

    .then(function(respuesta) { 

       //aca se ejetuca si retorno sin errores        
     console.info("respuesta SLIM", respuesta);
     alert("VOTO REGISTRADO SLIM!");
     $state.go("inicio");
    
  },function errorCallback(response) {        
      //aca se ejecuta cuando hay errores
      console.log( response);           
    });



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
  }


  




});




app.controller('controlPersonaGrilla', function($scope, $http, $state, $auth) {
    
   


  $scope.Traer=function(){
    $http.get('PHP/nexo.php', { params: {accion :"traer"}})
    .then(function(respuesta) {       

           $scope.ListadoPersonas = respuesta.data.listado;
           console.log(respuesta.data);

      },function errorCallback(response) {
           $scope.ListadoPersonas= [];
          console.log( response);
          
     });
  }

  $scope.Traer();

  $scope.Borrar=function(persona){
    console.log("borrar"+persona.id);
    $http.post("PHP/nexo.php",{ datos:{accion :"borrar", persona:persona, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}})
    .success(function(data, status, headers, config) {
        console.log("bien"+data);
        $scope.Traer();
      }).error(function(data, status, headers, config) {
         console.log("mal"+data);
    });


  }

  $scope.Modificar=function(id){
    
    console.log("Modificar"+id);
    $state.go("persona.modificarVotacion");
  }

});


app.controller('controlPersonaVotacionMOD', function($scope, $http, FileUploader, $state) {
  $scope.persona={};
  $scope.persona.fecha;
  $scope.persona.dni;
  $scope.persona.partido;
  $scope.persona.sexo;
  $scope.persona.foto='pordefecto.png';
 $scope.uploader=new FileUploader({url:'servidor/archivos.php'});


$scope.uploader.onAfterAddingFile = function(item) {
  item.file.name =$scope.persona.dni+'.jpg';
};

$scope.uploader.onSuccessItem=function(item, response, status, headers)
  {

       $scope.uploader.onBeforeUploadItem(item);

 };




  $scope.Votar=function(){



    console.log($scope.uploader.queue);
      if($scope.uploader.queue[0]!=undefined)
      {
        var nombreFoto = $scope.uploader.queue[0]._file.name;
        $scope.persona.foto= $scope.persona.dni+'.jpg';
      }

    

      console.info("persona a guardar:   .......",$scope.persona);
      

       $http.post("PHP/nexo.php",{ datos:{accion :"borrar", persona:$scope.persona, headers: {'Content-Type': 'application/x-www-form-urlencoded'}}})
    .then(function(respuesta) {  
     
  },function errorCallback(response) {        
     
      console.log( response);           
    });

       $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
    .then(function(respuesta) {  
     alert("VOTO MODIFICADO!");
     $state.go("persona.grilla");
    
  },function errorCallback(response) {        
     
      console.log( response);           
    });





  }




  




});

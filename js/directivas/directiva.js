angular
.module('abmapp')

.directive('utnSaludo', function() {

return {template : "Hola Mundo"};

})



.directive('utnTitulo', function() {

return {replace : true, restrict : "MEAC", templateUrl : "templates/grillabotones.html"};

})









.directive('bandera', function() {

return {scope : {mibandera : '=banderita'}, replace : true, restrict : "MEAC", templateUrl : "templates/templateBandera.html"};

})




.directive('nombreUser', function(factoryUserActual) {

return {scope : {useractual : '=usuarito'}, replace : true, restrict : "MEAC", templateUrl : "templates/nombreUser.html"};

})

.directive('prodList', function(factoryUserActual) {
	

return {scope : {objEnv : '=obj',Borrar: '&'}, replace : true, restrict : "MEAC", templateUrl : "templates/templateProduc.html" , //};

link: function($scope, element, attrs) {

	
			    $scope.user=factoryUserActual.Logueado;
//	console.info($scope.user);
//	console.info($scope.user.perfil);
            $scope.Borrar = function(produ){
            	//console.info($scope.BorrarUsuario);
			    $scope.$parent.Borrar(produ);
			  }

			  $scope.Modificar = function(produ){
			    $scope.$parent.Modificar(produ);
		  }

        }
};

})

.directive('userList', function(factoryUserActual) {
	

return {scope : {objEnv : '=obj',Borrar: '&'}, replace : true, restrict : "MEAC", templateUrl : "templates/templateUser.html" , //};

link: function($scope, element, attrs) {

	
			    $scope.user=factoryUserActual.Logueado;
//	console.info($scope.user);
//	console.info($scope.user.perfil);
            $scope.Borrar = function(produ){
            	//console.info($scope.BorrarUsuario);
			    $scope.$parent.Borrar(produ);
			  }

			  $scope.Modificar = function(produ){
			    $scope.$parent.Modificar(produ);
		  }

        }
};

})

//fin
 ;
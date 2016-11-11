angular
.module('ABMangularPHP')

.directive('utnSaludo', function() {

return {template : "Hola Mundo"};

})



.directive('utnTitulo', function() {

return {replace : true, restrict : "MEAC", templateUrl : "templates/grillabotones.html"};

})









.directive('bandera', function() {

return {scope : {mibandera : '=banderita'}, replace : true, restrict : "MEAC", templateUrl : "templates/templateBandera.html"};

})






//fin
 ;
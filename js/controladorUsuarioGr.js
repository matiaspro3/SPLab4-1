angular.module('abmapp.filtrosUsuarioGrilla', []) 
  app.filter('tipo', function () {
   var perfil = {
      'admin': 'Administrador',
      'vend': 'Vendedor',
      'comp': 'Comprador'
    }
   return function (input) {
        if (!input)
        return '';
    return perfil[input];
    }

});
app.filter('sexo', function () {
   var sex = {
      'f': 'Femenino',
      'm': 'Masculino'
      
    }
   return function (input) {
        if (!input)
        return '';
    return sex[input];
    };





  });

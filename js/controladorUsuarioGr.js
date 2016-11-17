angular.module('abmapp.filtrosUsuarioGrilla', []) 
  app.filter('tipo', function () {
/*   var perfil = {
      'admin': 'Administrador',
      'vend': 'Vendedor',
      'comp': 'Comprador'
    }
  */  return function (input) {
        if (!input)
        return '';
    //  return perfil[input];
    };
  });

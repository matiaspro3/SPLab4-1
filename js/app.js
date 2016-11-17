
//var app = angular.module('abmapp', ['ui.router','abmapp.factoryPersona', 'abmapp.servicioABM','abmapp.controllersPersona', 'abmapp.controllersUsuario', 'satellizer', 'angularFileUpload', 'validation.match']);
var app = angular.module('abmapp', ['ui.router','abmapp.controllersPersona', 'abmapp.controllersUsuario', 'satellizer', 'angularFileUpload', 'validation.match']);
app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  
  $authProvider.loginUrl = 'lab/PHP/auth.php'; //Ruta del archivo auth que esta en jwt y direcciona a PHP
  $authProvider.tokenName = 'ElNombreDelToken'; //nombre largo
  $authProvider.tokenPrefix = 'Aplicacion'; //sarasa
  $authProvider.authHeader = 'data';

  $authProvider.github({
      clientId: '08fc74e99837e2f15086',
      url: '/auth/github',
      authorizationEndpoint: 'https://github.com/login/oauth/authorize',
      redirectUri: window.location.origin,
      optionalUrlParams: ['scope'],
      scope: ['user:email'],
      scopeDelimiter: ' ',
      oauthType: '2.0',
      popupOptions: { width: 1020, height: 618 }
    });

  $stateProvider
 
      .state('inicio', {
                url : '/inicio',
                cache:false,
                templateUrl : 'vistas/inicio2.html',
                controller : 'controlInicio'
            })
      .state('persona', {
                url : '/persona',
                abstract:true,
                       cache:false,
                templateUrl : 'vistas/abstractaPersona.html',
                controller : 'controlPersona'
            })
  
      .state('persona.menu', {
                url: '/menu',
                       cache:false,
                views: {
                    'contenido': {
                        templateUrl: 'vistas/personaMenu.html',
                        controller : 'controlPersonaMenu'
                    }
                }
            })
      .state('persona.votacion', {
                url: '/votacion',
                       cache:false,
                views: {
                    'contenido': {
                        templateUrl: 'vistas/personaVotacion.html',
                        controller : 'controlPersonaVotacion'
                    }
                }
            })

      .state('persona.modificarVotacion', {
                      url: '/ModificarVotacion',
                             cache:false,
                              params: {
                  objPersona: null
                },
                      views: {
                          'contenido': {
                              templateUrl: 'vistas/personaVotacionMOD.html',
                              controller : 'controlPersonaVotacionMOD'
                          }
                      }
                  })


      .state('persona.grilla', {
                url: '/grilla',
                       cache:false,
                views: {
                    'contenido': {
                        templateUrl: 'vistas/personaGrilla.html',
                        controller : 'controlPersonaGrilla'
                    }
                }
            })



      .state('usuario', {
                url : '/usuario',
                abstract:true,
                       cache:false,
                templateUrl : 'vistas/abstractaUsuario.html',
                controller : 'controlUsuario'
            })


      .state('usuario.menu', {
                url: '/usermenu',
                       cache:false,
                views: {
                    'contenido': {
                        templateUrl: 'vistas/usuarioMenu.html',
                        controller : 'controlUsuarioMenu'
                    }
                }
            })
      .state('usuario.login', {
                url: '/login',
                       cache:false,
                views: {
                    'contenido': {
                        templateUrl: 'vistas/usuarioLogin.html',
                        controller : 'controlUsuarioLogin'
                    }
                }
            })
      .state('usuario.registrarse', {
                url: '/registrarse',
                       cache:false,
                views: {
                    'contenido': {
                        templateUrl: 'vistas/usuarioRegistrarse.html',
                        controller : 'controlUsuarioRegistrarse'
                    }
                }
            })

      .state('usuario.modificar', {
                      url: '/Modificar',
                             cache:false,
                              params: {
                  objUser: null
                },
                      views: {
                          'contenido': {
                              templateUrl: 'vistas/usuarioRegistrarseMOD.html',
                              controller : 'usuarioRegistrarseMOD'
                          }
                      }
                  })

    .state('usuario.grilla', {
                url: '/grilla',
                       cache:false,
                views: {
                    'contenido': {
                        templateUrl: 'vistas/usuarioGrilla.html',
                        controller : 'controlUsuarioGrilla'
                    }
                }
            })


.state('directiva', {
      url: '/directiva',
             cache:false,
      templateUrl: 'vistas/directiva.html',
      controller:'DirectivaCtrl'
    })











             $urlRouterProvider.otherwise('/inicio');
});


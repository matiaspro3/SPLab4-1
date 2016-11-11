
var app = angular.module('ABMangularPHP', ['ui.router', 'ABMangularPHP.controllers', 'satellizer', 'angularFileUpload', 'validation.match']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  
  $authProvider.loginUrl = 'Parcial 2 v0.001/PHP/auth.php'; //Ruta del archivo auth que esta en jwt y direcciona a PHP
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
                templateUrl : 'vistas/inicio.html',
                controller : 'controlInicio'
            })
      .state('persona', {
                url : '/persona',
                abstract:true,
                templateUrl : 'vistas/abstractaPersona.html',
                controller : 'controlPersona'
            })
  
      .state('persona.menu', {
                url: '/menu',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/personaMenu.html',
                        controller : 'controlPersonaMenu'
                    }
                }
            })
      .state('persona.votacion', {
                url: '/votacion',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/personaVotacion.html',
                        controller : 'controlPersonaVotacion'
                    }
                }
            })

      .state('persona.modificarVotacion', {
                      url: '/ModificarVotacion',
                      views: {
                          'contenido': {
                              templateUrl: 'vistas/personaVotacionMOD.html',
                              controller : 'controlPersonaVotacionMOD'
                          }
                      }
                  })


      .state('persona.grilla', {
                url: '/grilla',
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
                templateUrl : 'vistas/abstractaUsuario.html',
                controller : 'controlUsuario'
            })


      .state('usuario.menu', {
                url: '/usermenu',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/usuarioMenu.html',
                        controller : 'controlUsuarioMenu'
                    }
                }
            })
      .state('usuario.login', {
                url: '/login',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/usuarioLogin.html',
                        controller : 'controlUsuarioLogin'
                    }
                }
            })
      .state('usuario.registrarse', {
                url: '/registrarse',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/usuarioRegistrarse.html',
                        controller : 'controlUsuarioRegistrarse'
                    }
                }
            })
    .state('usuario.grilla', {
                url: '/grilla',
                views: {
                    'contenido': {
                        templateUrl: 'vistas/usuarioGrilla.html',
                        controller : 'controlUsuarioGrilla'
                    }
                }
            })


.state('directiva', {
      url: '/directiva',
      templateUrl: 'vistas/directiva.html',
      controller:'DirectivaCtrl'
    })











             $urlRouterProvider.otherwise('/inicio');
});


<?php
/*
require 'Slim/Slim.php';
require_once 'app/libs/Array2XML.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

define("SPECIALCONSTANT", true);
require 'app/libs/connect.php';
require 'app/routes/api.php';
include_once '../clases/Personas.php';

$app->run();
*/

header('Access-Control-Allow-Origin: *');  
/**
 * Step 1: Require the Slim Framework using Composer's autoloader
 *
 * If you are not using Composer, you need to load Slim Framework with your own
 * PSR-4 autoloader.
 */
require 'vendor/autoload.php';
require '../PHP/clases/Personas.php';
require '../PHP/clases/Usuarios.php';
require '../PHP/clases/Productos.php';
/**
 * Step 2: Instantiate a Slim application
 *

 */
$app = new Slim\App();

/**
 * Step 3: Define the Slim application routes
 *
/**
* GET: Para consultar y leer recursos
* POST: Para crear recursos
* PUT: Para editar recursos
* DELETE: Para eliminar recursos
*
*  GET: Para consultar y leer recursos */

$app->get('/', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    return $response;
});

//TRAER LISTA DE OBJETOS
$app->get('/personas[/]', function ($request, $response, $args) {
    $datos = Persona::TraerTodasLasPersonas();
    $response->write(json_encode($datos))   ;//INTERNAL SERVER ERROR 500 -> Porque le es6taba devolviendo una referencia a memoria del servidor (hay que pasar un "string" del objeto transformado a json!!)
    //$response->write("Lista de usuarios");
    
    return $response;
});

$app->get('/usuarios[/]', function ($request, $response, $args) {
    $datos = usuario::TraerTodosLosUsuarios();
    $response->write(json_encode($datos))   ;//INTERNAL SERVER ERROR 500 -> Porque le es6taba devolviendo una referencia a memoria del servidor (hay que pasar un "string" del objeto transformado a json!!)
    //$response->write("Lista de usuarios");
    
    return $response;
});
$app->get('/productos[/]', function ($request, $response, $args) {
    $datos = Productos::TraerTodos();
    $response->write(json_encode($datos))   ;//INTERNAL SERVER ERROR 500 -> Porque le es6taba devolviendo una referencia a memoria del servidor (hay que pasar un "string" del objeto transformado a json!!)
    //$response->write("Lista de usuarios");
    
    return $response;
});




$app->get('/usuario[/{id}[/{name}]]', function ($request, $response, $args) {
    $response->write("Datos usuario ");
    var_dump($args);
    return $response;
});







/* FORMA DE RECIBIR POR PARAMETROS UN OBJETO EN POST
    POST: Para crear recursos */
$app->post('/alta/{objeto}', function ($request, $response, $args) {
    $persona = json_decode($args['objeto']);
  
// mover foto

            if($persona->foto!="pordefecto.png")
            {
                $rutaVieja="../servidor/usuarios/".$persona->foto;
                $rutaNueva="../fotos/".$persona->foto;
                copy($rutaVieja,$rutaNueva);
            }
            $datos = Persona::InsertarPersona($persona);
// mover foto fin

    $response->write($datos);

    return $response;
});

$app->post('/altaUser/{usuario}', function ($request, $response, $args) {
    $persona = json_decode($args['usuario']);
    $datos = usuario::InsertarUser($persona);


    $response->write($datos);

    return $response;
});



// /* PUT: Para editar recursos */
$app->put('/modificarPerson/{objeto}', function ($request, $response, $args) {
    $persona = json_decode($args['objeto']);
    $datos = Persona::ModificarPersona($persona);
    $response->write($datos);
    //var_dump($args);
    return $response;
});
$app->put('/modificarUser/{objeto}', function ($request, $response, $args) {
    $usuario = json_decode($args['objeto']);
    $datos = usuario::ModificarUser($usuario);
    $response->write($datos);
    //var_dump($args);
    return $response;
});




// /* DELETE: Para eliminar recursos */
$app->delete('/personas/{id}', function ($request, $response, $args) {
   
   $obje=Persona::TraerUnaPersona($args['id'])   ;

        if($obje->foto!="pordefecto.png")
            {
                unlink("../fotos/".$obje->foto);
            }

       
$datos = Persona::BorrarPersona($args['id']);
    $response->write("borrado !: ");
    //var_dump($args);
    return $response;
});

$app->delete('/usuario/{id}', function ($request, $response, $args) {
   
  /* //si pide foto 
   $obje=Persona::TraerUnaPersona($args['id'])   ;

  
        if($obje->foto!="pordefecto.png")
            {
                unlink("../fotos/".$obje->foto);
            }
*/
       
$datos = usuario::BorrarUser($args['id']);
    $response->write("borrado !: ");
    //var_dump($args);
    return $response;
});















/**
 * Step 4: Run the Slim application
 *
 * This method should be called last. This executes the Slim application
 * and returns the HTTP response to the HTTP client.
 */
$app->run();

<?php
include_once '../jwt/vendor/autoload.php';
use \Firebase\JWT\JWT;

include "clases/Personas.php";
include "clases/Usuarios.php";

$datosDelModeloPorPOST = file_get_contents('php://input'); // Metodo para traer los datos de JS.
$usuario = json_decode($datosDelModeloPorPOST);

//if ($usuario->usuario == 'admin' && $usuario->dni == '11111111' && $usuario->password == 'admin'){

$log=usuario::TraerUnUser($usuario);


if ($log!=false){	
	$ClaveDeEncritacion = 'estaEsLaClave';
	$token["usuario"] = $log->usuario;
	$token["dni"] = $log->dni;
	$token["pass"] = $log->password;
	$token["perfil"]="admin";
	$token["iat"]=time();
	$token["exp"]=time()+60;

	$jwt = JWT::encode($token, $ClaveDeEncritacion); //&genero el token con los datos que quiero
	$ArrayConToken["ElNombreDelToken"]=$jwt;//Guardo el token en un array (el nombre del token tiene que ser el mismo que en el js)!!
}
else {
 $ArrayConToken["ElNombreDelToken"]= false;
}

echo json_encode($ArrayConToken);//devuelvo el array que contiene el token

?>
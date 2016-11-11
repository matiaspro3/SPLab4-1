<?php 
include "clases/Personas.php";
include "clases/Usuarios.php";

	$DatosPorPost = file_get_contents("php://input");
	$respuesta = json_decode($DatosPorPost);
/*
if ( !empty( $_FILES ) ) 
{
    $temporal = $_FILES[ 'file' ][ 'tmp_name' ];
    $ruta = "..". DIRECTORY_SEPARATOR . 'fotos' . DIRECTORY_SEPARATOR . $_FILES[ 'file' ][ 'name' ];
    //$ruta = "..". DIRECTORY_SEPARATOR . 'fotos' . DIRECTORY_SEPARATOR .$respuesta->datos->persona->dni.'.jpg';
  $server = "..". DIRECTORY_SEPARATOR .'servidor'. DIRECTORY_SEPARATOR . 'usuarios' . DIRECTORY_SEPARATOR . $_FILES[ 'file' ][ 'name' ];

copy($temporal, $server);
    move_uploaded_file( $temporal, $ruta );
 

    echo "correcto";
}*/

if(isset($_GET['accion']))
{
	$accion=$_GET['accion'];
	if($accion=="traer")
	{
		$respuesta= array();
		$respuesta['listado']=Persona::TraerTodasLasPersonas();
		$arrayJson = json_encode($respuesta);
		echo  $arrayJson;
	}if($accion=="traerUser")
	{
		$respuesta= array();
		$respuesta['listado']=usuario::TraerTodosLosUsuarios();
		$arrayJson = json_encode($respuesta);
		echo  $arrayJson;
	}



}

else{//Si es un post entra por el else!

	$DatosPorPost = file_get_contents("php://input");
	$respuesta = json_decode($DatosPorPost);
	//var_dump($respuesta);
	switch($respuesta->datos->accion)
	{
		case "borrar":
		{
			if($respuesta->datos->persona->foto!="pordefecto.png")
			{
				unlink("../fotos/".$respuesta->datos->persona->foto);
			}
			Persona::BorrarPersona($respuesta->datos->persona->id);
			break;
		}
		case "insertar":
		{
			if($respuesta->datos->persona->foto!="pordefecto.png")
			{
				$rutaVieja="../servidor/usuarios/".$respuesta->datos->persona->foto;
				//$rutaVieja=$_FILES[ 'file' ][ 'tmp_name' ];
				//$rutaNueva=$respuesta->datos->persona->dni.".".PATHINFO($rutaVieja, PATHINFO_EXTENSION);
				$rutaNueva="../fotos/".$respuesta->datos->persona->foto;
				copy($rutaVieja,$rutaNueva);
			//	unlink($rutaVieja);
				//$respuesta->datos->persona->foto=$rutaNueva;
			}
			Persona::InsertarPersona($respuesta->datos->persona);
			break;
		}
		case "buscar":
		{
			echo json_encode(Persona::TraerUnaPersona($respuesta->datos->id));
			break;
		}
		case "modificar":
		{
			if($respuesta->datos->persona->foto!="pordefecto.png")
			{
				$rutaVieja="../fotos/".$respuesta->datos->persona->foto;
				$rutaNueva=$respuesta->datos->persona->dni.".".PATHINFO($rutaVieja, PATHINFO_EXTENSION);
				copy($rutaVieja, "../fotos/".$rutaNueva);
				unlink($rutaVieja);
				$respuesta->datos->persona->foto=$rutaNueva;
			}
			Persona::ModificarPersona($respuesta->datos->persona);
			break;
		}

			case "insertarUser":
		{
			usuario:: insertarUser($respuesta->datos->usuario);
			break;
		}
			case "borrarUser":
					{
						
						usuario::BorrarUser($respuesta->datos->usuario->id);
						break;
					}

	}
	
	/*else
	{
		echo 'No se cargo el archivo';
	}*/
	


	//echo $respuesta->datos->persona->nombre;

	


}




 ?>
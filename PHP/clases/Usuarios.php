<?php
require_once"accesoDatos.php";
class usuario
{
//--------------------------------------------------------------------------------//
//--ATRIBUTOS
	public $usuario;
	public $dni;
 	public $password;
  	public $partido;
  	public $foto;


//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--GETTERS Y SETTERS

	public function Getdni()
	{
		return $this->dni;
	}
	public function Getpassword()
	{
		return $this->password;
	}
	public function Getusuario()
	{
		return $this->usuario;
	}
	public function GetFoto()
	{
		return $this->foto;
	}
	public function GetPartido()
	{
		return $this->partido;
	}

	public function Setdni($valor)
	{
		$this->dni = $valor;
	}
	public function Setpassword($valor)
	{
		$this->password = $valor;
	}
	public function Setpartido($valor)
	{
		$this->partido = $valor;
	}
	public function Setusuario($valor)
	{
		$this->usuario = $valor;
	}
	public function SetFoto($valor)
	{
		$this->foto = $valor;
	}
//--------------------------------------------------------------------------------//
//--CONSTRUCTOR
	public function __construct($usuario=NULL)
	{
		if($usuario != NULL){
			$obj = Persona::TraerUnaPersona($usuario);
			
			$this->apellido = $obj->apellido;
			$this->nombre = $obj->nombre;
			$this->usuario = $usuario;
			$this->foto = $obj->foto;
		}
	}

//--------------------------------------------------------------------------------//
//--TOSTRING	
  	public function ToString()
	{
	  	return $this->apellido."-".$this->nombre."-".$this->usuario."-".$this->foto;
	}
//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//
//--METODO DE CLASE
	public static function TraerUnUser($usuario) 
	{	


		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		//$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuarios where usuario =:usuario");
	//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerUnaPersona(:id)");

		$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuarios where usuario =:usuario and dni=:dni and password=:password ");
		$consulta->bindValue(':usuario', $usuario->usuario, PDO::PARAM_INT);
		$consulta->bindValue(':dni', $usuario->dni, PDO::PARAM_INT);
		$consulta->bindValue(':password', $usuario->password, PDO::PARAM_INT);
		$consulta->execute();
		$personaBuscada= $consulta->fetchObject('usuario');
		return $personaBuscada;	
					
	}
	
	public static function TraerTodosLosUsuarios()
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("select * from usuarios");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL TraerTodasLasPersonas() ");
		$consulta->execute();			
		$arrPersonas= $consulta->fetchAll(PDO::FETCH_CLASS, "usuario");	
		return $arrPersonas;
	}
	
	public static function BorrarUser($idParametro)
	{	
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("delete from usuarios	WHERE id=:id");	
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL BorrarPersona(:id)");	
		$consulta->bindValue(':id',$idParametro, PDO::PARAM_INT);		
		$consulta->execute();
		return $consulta->rowCount();
		
	}
	
	public static function ModificarPersona($persona)
	{
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
			/*$consulta =$objetoAccesoDato->RetornarConsulta("
				update persona 
				set nombre=:nombre,
				apellido=:apellido,
				foto=:foto
				WHERE id=:id");
			$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();*/ 
			$consulta =$objetoAccesoDato->RetornarConsulta("CALL ModificarPersona(:id,:nombre,:apellido,:foto)");
			$consulta->bindValue(':id',$persona->id, PDO::PARAM_INT);
			$consulta->bindValue(':nombre',$persona->nombre, PDO::PARAM_STR);
			$consulta->bindValue(':apellido', $persona->apellido, PDO::PARAM_STR);
			$consulta->bindValue(':foto', $persona->foto, PDO::PARAM_STR);
			return $consulta->execute();
	}

//--------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------//

	public static function InsertarUser($user)
	{
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso(); 
		$consulta =$objetoAccesoDato->RetornarConsulta("insert into usuarios (usuario,dni,password)values(:usuario,:dni,:password)");
		//$consulta =$objetoAccesoDato->RetornarConsulta("CALL InsertarPersona (:usuario,:dni,:password,:partido,:foto)");

		$consulta->bindValue(':usuario', $user->usuario, PDO::PARAM_STR);
		$consulta->bindValue(':dni',$user->dni, PDO::PARAM_STR);
		$consulta->bindValue(':password', $user->password, PDO::PARAM_STR);
	
		$consulta->execute();		
		return $objetoAccesoDato->RetornarUltimoIdInsertado();
	
				
	}	
//--------------------------------------------------------------------------------//



	public static function TraerPersonasTest()
	{
		$arrayDePersonas=array();

		$persona = new stdClass();
		$persona->id = "4";
		$persona->nombre = "rogelio";
		$persona->apellido = "agua";
		$persona->usuario = "333333";
		$persona->foto = "333333.jpg";

		//$objetJson = json_encode($persona);
		//echo $objetJson;
		$persona2 = new stdClass();
		$persona2->id = "5";
		$persona2->nombre = "Bañera";
		$persona2->apellido = "giratoria";
		$persona2->usuario = "222222";
		$persona2->foto = "222222.jpg";

		$persona3 = new stdClass();
		$persona3->id = "6";
		$persona3->nombre = "Julieta";
		$persona3->apellido = "Roberto";
		$persona3->usuario = "888888";
		$persona3->foto = "888888.jpg";

		$arrayDePersonas[]=$persona;
		$arrayDePersonas[]=$persona2;
		$arrayDePersonas[]=$persona3;
		 
		

		return  $arrayDePersonas;
				
	}	


}

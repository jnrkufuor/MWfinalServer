<?php
/**
*/
include_once("adb.php");
/**
*Users  class
*/
class users extends adb{

	function addUser($username,$firstname='none',$lastname='none',$password='none',$phone){
		$strQuery="insert into user set
						USERNAME='$username',
						FIRSTNAME='$firstname',
						LASTNAME='$lastname',
						PHONE='$phone',
						PWORD='$password',
						type='admin'";
		return $this->query($strQuery);				
	}

	function login($username,$password)
	{
		return $this->query("select USERNAME, uid,phone from user where USERNAME='$username' and PWORD='$password' and TYPE='Admin'");
	}	


	function addFeature($name,$type,$latitude,$longitude,$vicinity,$rating){
		$strQuery="insert into feature set
						LOCATION='$name',
						TYPE='$type',
						LATITUDE='$latitude',
						LONGITUDE='$longitude',
						VICINITY='$vicinity',
						RATING='$rating'";
		return $this->query($strQuery);				
	}
}


?>





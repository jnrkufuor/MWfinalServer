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
						PWORD='$password'";
		return $this->query($strQuery);				
	}

	function login($username,$password)
	{
		return $this->query("select USERNAME, uid,phone from user where USERNAME='$username' and PWORD='$password'");
	}

	function getFeature($type)
	{
		return $this->query("select name, type , latitude , longitude , vicinity , rating from feature where type='$type'");
	}

	function log($username,$activity)
	{
		$strQuery="insert into logs set
						ID='$username',
						ACTIVITY='$activity'";
		return $this->query($strQuery);	
	}

	function logFeature($username,$type,$activity)
	{
		$strQuery="insert into request set
						ID='$username',
						TYPE='$type',
						DETAILS='$activity'";
		return $this->query($strQuery);	
	}
}


?>





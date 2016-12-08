<?php
include_once('users.php');
$obj = new users();
if ($_REQUEST['cmd']!=null)
{

    $cmd=$_REQUEST['cmd'];
    if ($cmd==1)
    {   
        $password=$_REQUEST['password'];
        $username=$_REQUEST['username'];
        $result=$obj->login($username,$password);
        $num=$obj->fetch();
        if($num==null){
            header('Content-Type:application/json');
            echo '{"message":"false"}';
        }
        else
        {
            header('Content-Type:application/json');
            echo json_encode($num);
        }
    }
    else if($cmd==2)
    {   
        if($_REQUEST['password']!=null && $_REQUEST['username']!=null){
            $password=$_REQUEST['password'];
            $username=$_REQUEST['username'];
            $firstname=$_REQUEST['fname'];
            $lastname=$_REQUEST['lname'];
            $phone=$_REQUEST['phone'];
            $result=$obj->addUser($username,$firstname,$lastname,$password,$phone);

            if ($result==0)
            {
                header('Content-Type:application/json');
                echo "false";
            }
            else
            {
                header('Content-Type:application/json');
                echo "true";
            }
        }
        else
        {
            header('Content-Type:application/json');
            echo "false"; 
        }
    }
      else if($cmd==3)
    {   
        
            $name=$_REQUEST['name'];
            $lat=$_REQUEST['lat'];
            $long=$_REQUEST['long'];
            $type=$_REQUEST['type'];
            $vic=$_REQUEST['vicinity'];
            $rating=$_REQUEST['rating'];
            $result=$obj->addFeature($name,$type,$lat,$long,$vic,$rating);

            if ($result==0)
            {
                header('Content-Type:application/json');
                echo "false";
            }
            else
            {
                header('Content-Type:application/json');
                echo "true";
            }
       
    }
        else if($cmd==4)
    {   
        
        $result=$obj->getLogs();
        $num=$obj->fetch();
        $pool = new users();
        $result=$pool->getLogs();
        if ($num==null)
        {
            header('Content-Type:application/json');
            echo '{"result":0,"message":"No One Is In Your Pool Yet"}';
        }
        else
        {
            header('Content-Type:application/json');
            $array=array(); 
            while($one=$pool->fetch())
            { 
                $array[]=$one;  
            }
            echo json_encode($array);
        }
    
       
    }

        else if($cmd==5)
    {   
        
        $result=$obj->getRequests();
        $num=$obj->fetch();
        $pool = new users();
        $result=$pool->getRequests();
        if ($num==null)
        {
            header('Content-Type:application/json');
            echo '{"result":0,"message":"No One Is In Your Pool Yet"}';
        }
        else
        {
            header('Content-Type:application/json');
            $array=array(); 
            while($one=$pool->fetch())
            { 
                $array[]=$one;  
            }
            echo json_encode($array);
        }
    
       
    }
   
}
?>
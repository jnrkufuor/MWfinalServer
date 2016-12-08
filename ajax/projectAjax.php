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
             $ob = new users();
           $details='Login Attempt Fail';
           $result=$ob->log($username,$details);
            header('Content-Type:application/json');
            echo '{"message":"false"}';
        }
        else
        {
           $ob = new users();
           $details='Login Attempt Success';
           $result=$ob->log($username,$details);
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
                $ob = new users();
           $details='User Add Attempt Fail';
           $result=$ob->log($username,$details);
                header('Content-Type:application/json');
                echo "false";
            }
            else
            {
                $ob = new users();
           $details='User Add  Attempt Success';
           $result=$ob->log($username,$details);
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
        $phone= $_REQUEST['phone'];
        $username= $_REQUEST['name'];
        $sender='Locate';
        $smsmessage='Welcome to Locate, '.$username. ' .Your account has been successfully created. Log in and activate it now.';
        $smsmessage= str_replace(' ','%20',$smsmessage);
        $ch = curl_init("http://52.89.116.249:13013/cgi-bin/sendsms?username=mobileapp&password=foobar&to=$phone&from=$sender&smsc=smsc&text=$smsmessage");
        curl_exec($ch);
    }
    else if($cmd==4)
    {  
        $username= $_REQUEST['name'];
        $bank= $_REQUEST['bank'];
        $name= $_REQUEST['name'];
        $num= $_REQUEST['num'];
        $branch= $_REQUEST['branch'];
        $phone=$_REQUEST['phone'];
        $ob = new users();
        $details='Request to '.$bank.'('.$branch.')- Acc Name:'.$name.' and Acc No:'.$num;
        $result=$ob->logFeature($username,'ATM',$details);
        $sender='LocateApp';
        $smsmessage='Your ATM request to '.$bank.'('.$branch.') is being processed. Acc Name:'.$name.' and Acc No:'.$num.'. When ready, Locate will inform you';
        $smsmessage= str_replace(' ','%20',$smsmessage);
        $ch = curl_init("http://52.89.116.249:13013/cgi-bin/sendsms?username=mobileapp&password=foobar&to=$phone&from=$sender&smsc=smsc&text=$smsmessage");
        curl_exec($ch);
    }
    else if($cmd==5)
    {  
         $username= $_REQUEST['name'];
        $hotel= $_REQUEST['hotel'];
        $room= $_REQUEST['room'];
        $date= $_REQUEST['date'];
        $phone=$_REQUEST['phone'];
        $sender='LocateApp';
        $ob = new users();
        $details='Hotel Booking at '.$hotel.' for ' .$room.' on '.$date;
        $result=$ob->logFeature($username,'Hotel',$details);
        $smsmessage='Locate is processing booking at'.$hotel.' for' .$room.' on '.$date.'. When ready, Locate will inform you';
        $smsmessage= str_replace(' ','%20',$smsmessage);
        $ch = curl_init("http://52.89.116.249:13013/cgi-bin/sendsms?username=mobileapp&password=foobar&to=$phone&from=$sender&smsc=smsc&text=$smsmessage");
        curl_exec($ch);
    }
    else if($cmd==6)
    {  
        $type=$_REQUEST['type'];
        $result=$obj->getFeature($type);
        $num=$obj->fetch();
        $pool = new users();
        $result=$pool->getFeature($type);
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
 else if($cmd==7)
    {  $username= $_REQUEST['name'];
          $ob = new users();
           $details='Logout Attempt Success';
           $result=$ob->log($username,$details);
}
}
?>
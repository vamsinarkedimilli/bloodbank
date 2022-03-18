<?php
    //CORS
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: application/json; charset=UTF-8");

    //Database Details
    $db_host = 'localhost';
    $db_username = 'root';
    $db_password = '';
    $db_name = 'bloodbank';

    //Database Connection
    $conn = mysqli_connect($db_host, $db_username, $db_password,$db_name);
    if (!$conn) {
        die('Error:'.mysqli_connect_error());
    } else{
      echo "Connected";
    }

?>

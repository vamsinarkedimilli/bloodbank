<?php
  include ('database.php');
  $donationJSON = file_get_contents('php://input');
  $array = json_decode($donationJSON,true);
  echo "$array";
  if(isset($donationJSON) && !empty($donationJSON)){
    $name = mysqli_real_escape_string($conn, trim($array['name']));
    $age = mysqli_real_escape_string($conn, trim($array['age']));
    $bloodgroup = mysqli_real_escape_string($conn, trim($array['bloodgroup']));
    $contactnumber = mysqli_real_escape_string($conn, trim($array['contactnumber']));
    $acontactnumber = mysqli_real_escape_string($conn, trim($array['alternatecontact']));
    $state = mysqli_real_escape_string($conn, trim($array['state']));
    $district = mysqli_real_escape_string($conn, trim($array['district']));
    $city = mysqli_real_escape_string($conn, trim($array['city']));

    //Inserting Data into the Database
    $insert_query = "INSERT INTO blooddonations values ('$name',$age,'$bloodgroup','$contactnumber','$acontactnumber','$state','$district','$city')";

    //Checking whether the data is inserted or not
    if($conn->query($insert_query) === TRUE){
      echo "Record Inserted Successfully";
    } else {
      echo "Error: ".$conn->error;
    }

    //Closing the Connection
    $conn->close();
  }
?>

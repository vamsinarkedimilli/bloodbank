<?php
  include 'database.php';
  $availabilityJSON = file_get_contents('php://input');
  $availabilityArray = json_decode($availabilityJSON,true);
  if(isset($availabilityJSON) && !empty($availabilityJSON)){
    $bloodgroup = mysqli_real_escape_string($conn, trim($availabilityArray['bloodgroup']));
    $state = mysqli_real_escape_string($conn, trim($availabilityArray['state']));
    $district = mysqli_real_escape_string($conn, trim($availabilityArray['district']));
    $city = mysqli_real_escape_string($conn, trim($availabilityArray['city']));
    $check_availability_query1 = "SELECT * FROM blooddonations WHERE bloodgroup='$bloodgroup' AND state='$state' AND district='$district' AND city='$city'";
    $result1=mysqli_query($conn,$check_availability_query1);
    $data = array();
    if(mysqli_num_rows($result1)){
      while($row = mysqli_fetch_assoc($result1)){
        $data[] = array(
          "name" => $row['name'],
          "age" => $row['age'],
          "contactnumber" => $row['contactnumber'],
          "alternatecontactnumber" => $row['acontactnumber'],
          "bloodgroup" => $row['bloodgroup']
        );
      }
      echo json_encode($data);
    } else{
      echo "Doesn't Exists";
    }
  }
?>

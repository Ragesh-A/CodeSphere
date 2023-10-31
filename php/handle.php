<?php
try {
  if($_SERVER["REQUEST_METHOD"] == 'POST'){

    
    //assigning values
    if(isset($_POST['username'])){
      $username = $_POST['username'];
    }
    if(isset($_POST['password'])){
      $password = $_POST['password'];
    }

    // validation
    $errors = [];

    if(empty($username)) {
      array_push($errors, 'name is required');
    }

    if(empty($password)) {
      array_push($errors, 'password is required');
    }

    if(!empty($errors)){
      foreach($errors as $e) {
        echo $e. "<br>";
      }
    }else {
      echo 'all settled';
    }

  }

  function substract($a, $b) {
    return $a - $b;
  }

  echo substract(5 , 5);


} catch (\Throwable $th) {
  echo 'validation failed';
}

?>
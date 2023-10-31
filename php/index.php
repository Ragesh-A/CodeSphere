<?php
  session_start();
  echo $_SESSION["Ragesh"]. "<br>";
  if(isset($_COOKIE['authorization'])) {
    $auth = $_COOKIE['authorization'];
    if(isset($_SESSION[$auth])) {
      echo "yes logged $auth<br>";
      header('location: home.php');
    }else{
      echo "needed to log";
      header('location: login.php');
    }
  }else{
    include('login.php');
  }
?>
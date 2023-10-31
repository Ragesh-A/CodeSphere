<?php
$is_session_start = session_status();

if($is_session_start != 2) {
  session_start();
}

$is_logged = false;
if(isset($_COOKIE['authorization'])){
    $auth = $_COOKIE['authorization'];
    if(isset($_SESSION[$auth])){
      $is_logged = true;
    }
  }

  if($is_logged) {
    echo "is already logged";
    echo "<form action='home.php' method='POST'><button name='logout'>logout</button></form>";
  }else {
    echo 'please login';
    echo "<a href='login.php'>login</a>";
    foreach($_SERVER as $key => $value){
      echo "$key: $value <br>";
    }
  }

  if($_SERVER["REQUEST_METHOD"] == "POST") {
    if(isset($_POST['logout'])) {
      if(session_status() !== 2) {
        session_start();
      }
      session_destroy();
      header('location: index.php');
    }
  }
?>
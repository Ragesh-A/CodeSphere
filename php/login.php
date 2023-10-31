<?php
  echo session_status();
  if(session_status() == 1) {
    session_start();
  }


  if(isset($_COOKIE['authorization'])){
    $auth = $_COOKIE['authorization'];
    echo $auth. "<br>";
    if(isset($_SESSION[$auth])){
      header('location: home.php');
    }
  }


  if($_SERVER['REQUEST_METHOD'] == 'POST'){
    echo $_SERVER['REQUEST_METHOD'];
    if(isset($_POST['username'])) {
      $username = filter_input(INPUT_POST,'username',
            FILTER_SANITIZE_SPECIAL_CHARS);
            echo $username;
            setcookie('authorization', $username, time() + (86400 *2), '/');
      session_start();
      foreach($_SESSION as $i => $va){
        echo "$i :$va <br>";
      }
      // if(!$_SESSION[$username]){
        $_SESSION[$username] = $username;
      // };
    }


  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="login.php" method="post">
    <label for="username">User name: </label>
    <input type="text" name="username" id="username">
    <input type="submit" value="submit">
  </form>
</body>
</html>
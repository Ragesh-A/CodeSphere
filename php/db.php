<?php

  $hostname = 'localhost';
  $db_password= '';
  $db_user= 'root';
  $db_name = 'learndb';
  
  try {
    $db_connection =  mysqli_connect(
      $hostname,
      $db_user,
      $db_user,
      $db_name
    );
  } catch (mysqli_sql_exception) {
    echo "failed to connect with database";
  }

?>
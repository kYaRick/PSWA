<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
  echo "Error";
  exit();
}

$con = mysqli_connect("localhost", "root", "root", "schwager");
if ($con->connect_errno) {
  printf("Connect failed: %s\n", $mysqli->connect_error);
  exit();
}

$sql = "SELECT id FROM users WHERE email='{$_POST['login']}' AND password='{$_POST['password']}'";
// echo $sql;


try {
  $result = mysqli_query($con, $sql);
  if (!$result) {
    throw new Exception(mysqli_error($con));
  }

  if (mysqli_num_rows($result) < 0) {
    throw new Exception("User wasn't found");
  }

  $id = mysqli_fetch_array($result, MYSQLI_NUM)[0];
  // print($id);
  $cookie_name = "user";
  // echo mysqli_fetch_assoc($result);
  setcookie($cookie_name, $id, time() + (86400 * 30), "/");

  header("Location: profile.php");
} catch (Exception $e) {
  echo $e->getMessage();
} finally {
  mysqli_close($con);
}

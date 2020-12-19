<?php
if (!isset($_COOKIE['user'])) {
  echo "You don't hame an account!";
  exit();
}

if (isset($_GET['file'])) {
  $photo = 'users/img/' . $_GET['file'];
  if (file_exists($photo)) {
    unlink($photo);
  }
}

$con = mysqli_connect("localhost", "root", "root", "schwager");
if ($con->connect_errno) {
  printf("Connect failed: %s\n", $mysqli->connect_error);
  exit();
}

$sql = "DELETE FROM users WHERE id='{$_COOKIE['user']}'";
// echo $sql;


try {
  if (!mysqli_query($con, $sql)) {
    throw new Exception(mysqli_error($con));
  }
  setcookie('user', '', time() - 1, "/");
  header("Location: index.html");
  // var_dump($d);
} catch (Exception $e) {
  echo $e->getMessage();
} finally {
  mysqli_close($con);
}

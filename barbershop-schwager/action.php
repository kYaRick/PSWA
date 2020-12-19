<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
  echo "Error";
  exit();
}

$target_dir = "users/img/";
$file_name = $_POST['sur_name'] . strval(time()) . basename($_FILES["photo"]["name"]);
$target_file = $target_dir . $file_name;

if (!getimagesize($_FILES["photo"]["tmp_name"])) {
  echo "File is not an image.";
  exit();
}

// Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  exit();
}

if (!move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
  echo "File wasn't uploaded!";
  exit();
}

$con = mysqli_connect("localhost", "root", "root", "schwager");
if ($con->connect_errno) {
  printf("Connect failed: %s\n", $mysqli->connect_error);
  exit();
}

$sql = "INSERT INTO users(email, lname, fname, date, languages, about, photo,  password) VALUES ('{$_POST['email']}', '{$_POST['sur_name']}', '{$_POST['first_name']}', '{$_POST['bd_date']}', '{$_POST['languages']}', '{$_POST['about']}', '{$file_name}', '{$_POST['password']}')";

// echo $sql;

try {
  if (!mysqli_query($con, $sql)) {
    throw new Exception(mysqli_error($con));
  }

  // $cookie_name = "user";
  // $last_id = mysqli_insert_id($con);
  // setcookie($cookie_name, $last_id, time() + (86400 * 30), "/");

  header("Location: login.html");
} catch (Exception $e) {
  echo $e->getMessage();
} finally {
  mysqli_close($con);
}

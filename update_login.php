<?php
session_start();
if (!isset($_SESSION['admin'])) {
  die("Unauthorized.");
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = [
    "username" => $_POST['newuser'],
    "password" => $_POST['newpass']
  ];
  file_put_contents("creds.json", json_encode($data, JSON_PRETTY_PRINT));
  echo "Credentials updated. <a href='admin.php'>Go back</a>";
}
?>

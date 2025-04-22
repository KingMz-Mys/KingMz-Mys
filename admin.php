<?php
session_start();
if (!isset($_SESSION['admin'])) {
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['adminpass'] === "KingAdmin") {
      $_SESSION['admin'] = true;
      header("Location: admin.php");
      exit();
    } else {
      $error = "Wrong admin password.";
    }
  }
  ?>

  <!DOCTYPE html>
  <html>
  <head>
    <title>Admin Login</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="login-container">
      <h2>Admin Login</h2>
      <form method="post">
        <input type="password" name="adminpass" placeholder="Enter Admin Password" required><br>
        <button type="submit">Enter</button>
        <?php if (isset($error)) echo "<p class='error'>$error</p>"; ?>
      </form>
    </div>
    <div class="watermark">made by: @Predict_king11</div>
  </body>
  </html>

  <?php
  exit();
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Admin Panel</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="login-container">
    <h2>Update Login Info</h2>
    <form action="update_login.php" method="post">
      <input type="text" name="newuser" placeholder="New Username" required><br>
      <input type="password" name="newpass" placeholder="New Password" required><br>
      <button type="submit">Update</button>
    </form>
  </div>
  <div class="watermark">made by: @Predict_king11</div>
</body>
</html>

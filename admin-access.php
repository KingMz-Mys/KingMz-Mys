<?php
session_start();

if (!isset($_SESSION['admin'])) {
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['adminpass'] === "AdminKing") {
      $_SESSION['admin'] = true;
      header("Location: admin-access.php");
      exit();
    } else {
      $error = "Wrong admin password.";
    }
  }
  ?>
  <!DOCTYPE html>
  <html>
  <head>
    <title>Admin Access</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="login-container">
      <h2>Admin Access</h2>
      <form method="post">
        <input type="password" name="adminpass" placeholder="Admin Password" required><br>
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
  <title>Admin Panel - Ganti Login</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="login-container">
    <h2>Ganti Username & Password Login</h2>
    <form action="update_login.php" method="post">
      <input type="text" name="newuser" placeholder="Username Baru" required><br>
      <input type="password" name="newpass" placeholder="Password Baru" required><br>
      <button type="submit">Simpan</button>
    </form>
  </div>
  <div class="watermark">made by: @Predict_king11</div>
</body>
</html>

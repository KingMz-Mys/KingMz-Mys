
async function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const res = await fetch("config.json");
  const config = await res.json();

  if (user === config.username && pass === config.password) {
    window.location.href = "index.html";
  } else {
    alert("Login gagal");
  }
}

let USERNAME = "CustomerApps";
let PASSWORD = "CustomerVVIP";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === USERNAME && pass === PASSWORD) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("main-section").style.display = "block";
    updateTimeAndPrediction();
    setInterval(updateTimeAndPrediction, 60000); // update every 1 minute
  } else {
    document.getElementById("login-error").innerText = "Login failed!";
  }
}

function updateTimeAndPrediction() {
  const now = new Date();
  document.getElementById("current-time").innerText = now.toLocaleTimeString();

  const period = now.getHours().toString().padStart(2, '0') + now.getMinutes().toString().padStart(2, '0');
  document.getElementById("current-period").innerText = "P" + period;

  const bigSmall = Math.random() > 0.5 ? "Big" : "Small";
  const warna = Math.random() > 0.5 ? "Merah" : "Hijau";
  const angka = Math.floor(Math.random() * 10);

  document.getElementById("big-small").innerText = bigSmall;
  document.getElementById("warna").innerText = warna;
  document.getElementById("angka").innerText = angka;
}

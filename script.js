// Default credentials (bisa diganti via admin.html nanti)
let defaultUsername = "CustomerPD";
let defaultPassword = "CustomerVVIP";

// Handle Login
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === defaultUsername && pass === defaultPassword) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    startPrediction();
  } else {
    document.getElementById("loginError").innerText = "Invalid username or password.";
  }
}

// Generate prediction logic
function generatePrediction() {
  const bigSmall = Math.random() > 0.5 ? "BIG" : "SMALL";
  const color = Math.random() > 0.5 ? "RED" : "GREEN";
  const number = Math.floor(Math.random() * 10);
  const winrate = Math.floor(Math.random() * 51) + 50; // 50-100

  document.getElementById("bigSmall").innerText = bigSmall;
  document.getElementById("color").innerText = color;
  document.getElementById("number").innerText = number;
  document.getElementById("winrate").innerText = winrate + "%";
}

// Update periode info
function updatePeriod() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Format pseudo-periode ID (Contoh: 14:32 -> 1432)
  const period = `${hours}${minutes}`;
  document.getElementById("period").innerText = `Period: ${period}:${seconds}`;
}

// Jalankan prediksi tiap 60 detik
function startPrediction() {
  generatePrediction();
  updatePeriod();

  setInterval(() => {
    generatePrediction();
    updatePeriod();
  }, 60000); // 60 detik
}

let defaultUsername = localStorage.getItem("wingoUser") || "CustomerPD";
let defaultPassword = localStorage.getItem("wingoPass") || "CustomerVVIP";

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

function generatePrediction() {
  const bigSmall = Math.random() > 0.5 ? "BIG" : "SMALL";
  const color = Math.random() > 0.5 ? "RED" : "GREEN";
  const number = Math.floor(Math.random() * 10);
  const winrate = Math.floor(Math.random() * 51) + 50;

  document.getElementById("bigSmall").innerText = bigSmall;
  document.getElementById("color").innerText = color;
  document.getElementById("number").innerText = number;
  document.getElementById("winrate").innerText = winrate + "%";
}

function updatePeriod() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const minutesSinceMidnight = now.getHours() * 60 + now.getMinutes();
  const periodNumber = String(minutesSinceMidnight + 1).padStart(4, '0');
  const period = `${year}${month}${day}${periodNumber}`;
  const time = now.toLocaleTimeString('en-GB');
  document.getElementById("period").innerText = `Period: ${period} (${time})`;
}

let countdown = 60;

function startPrediction() {
  generatePrediction();
  updatePeriod();
  updateCountdown();

  setInterval(() => {
    generatePrediction();
    updatePeriod();
    countdown = 60;
  }, 60000);

  setInterval(() => {
    countdown--;
    if (countdown <= 0) countdown = 60;
    updateCountdown();
  }, 1000);
}

function updateCountdown() {
  document.getElementById("countdown").innerText = `Next prediction in: ${countdown}s`;
}

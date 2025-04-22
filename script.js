// Default login credentials
const defaultUser = "CustomerVip";
let currentPassword = localStorage.getItem("wingoPassword") || "CustomerVVIP1";

// --- LOGIN FUNCTION ---
if (window.location.pathname.includes("index.html")) {
  document.querySelector(".login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const user = this[0].value;
    const pass = this[1].value;

    if (user === defaultUser && pass === currentPassword) {
      window.location.href = "dashboard.html";
    } else {
      alert("Username or password incorrect!");
    }
  });
}

// --- DASHBOARD FUNCTION ---
if (window.location.pathname.includes("dashboard.html")) {
  let countdown = 60;
  let periodNumber = 100000;

  const countdownEl = document.getElementById("countdown");
  const periodEl = document.getElementById("period");

  function updatePrediction() {
    const bigSmall = Math.random() > 0.5 ? "BIG" : "SMALL";
    const color = Math.random() > 0.5 ? "RED" : "GREEN";
    const number = Math.floor(Math.random() * 10);
    const winrate = Math.floor(Math.random() * 50) + 50;

    document.querySelectorAll(".prediction-text")[0].textContent = bigSmall;
    document.querySelectorAll(".prediction-text")[1].textContent = color;
    document.querySelectorAll(".prediction-text")[2].textContent = number;
    document.querySelector(".fill").style.width = `${winrate}%`;
    document.querySelector(".winrate-text").textContent = `${winrate}%`;
  }

  function tick() {
    countdown--;
    countdownEl.textContent = `Next in: 00:${countdown.toString().padStart(2, '0')}`;
    if (countdown <= 0) {
      periodNumber++;
      countdown =

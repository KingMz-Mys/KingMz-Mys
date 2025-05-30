
async function loadAdmin() {
  const response = await fetch("admin.json");
  return await response.json();
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const admin = await loadAdmin();

      if (username === admin.username && password === admin.password) {
        window.location.href = "predict.html";
      } else {
        document.getElementById("loginStatus").innerText = "Login gagal!";
      }
    });
  }

  function generatePrediction() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours();
    const periode = "" + hour + (minutes < 10 ? "0" + minutes : minutes) + (seconds < 10 ? "0" + seconds : seconds);
    const last3 = periode.slice(-3);

    const bigSmall = Math.random() < 0.5 ? "Small" : "Big";
    const number = bigSmall === "Small" ? Math.floor(Math.random() * 5) : 5 + Math.floor(Math.random() * 5);
    const color = number % 2 === 0 ? "Red" : "Green";
    const winrate = (75 + Math.random() * 25).toFixed(1) + "%";

    document.getElementById("periode").innerText = last3;
    document.getElementById("masa").innerText = date.toLocaleTimeString();
    document.getElementById("bigSmall").innerText = bigSmall;
    document.getElementById("number").innerText = number;
    document.getElementById("color").innerText = color;
    document.getElementById("winrate").innerText = winrate;
  }

  if (window.location.pathname.includes("predict.html")) {
    generatePrediction();
    setInterval(generatePrediction, 60000);
  }
});

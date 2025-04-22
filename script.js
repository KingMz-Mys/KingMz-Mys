let countdown = 60;

function startPrediction() {
  generatePrediction();
  updatePeriod();
  updateCountdown(); // pertama kali

  // Update prediksi tiap 60 detik
  setInterval(() => {
    generatePrediction();
    updatePeriod();
    countdown = 60; // reset countdown tiap periode
  }, 60000);

  // Update countdown setiap detik
  setInterval(() => {
    countdown--;
    if (countdown <= 0) countdown = 60;
    updateCountdown();
  }, 1000);
}

function updateCountdown() {
  document.getElementById("countdown").innerText = `Next prediction in: ${countdown}s`;
}

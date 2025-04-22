let timer = 60;
let period = 1000 + Math.floor(Date.now() / 60000) % 1000;

function getRandomPrediction() {
  const bs = Math.random() < 0.5 ? "BIG" : "SMALL";
  const color = Math.random() < 0.5 ? "GREEN" : "RED";
  const number = Math.floor(Math.random() * 10);
  const winrate = (50 + Math.random() * 50).toFixed(2);

  document.getElementById("pred").innerText = `${bs} / ${color} / ${number}`;
  document.getElementById("winrate").innerText = `Winrate: ${winrate}%`;
  document.getElementById("period").innerText = ++period;
}

function countdown() {
  timer--;
  document.getElementById("timer").innerText = timer;
  if (timer <= 0) {
    timer = 60;
    getRandomPrediction();
  }
}

getRandomPrediction();
setInterval(countdown, 1000);

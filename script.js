
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePrediction() {
  const period = new Date().toLocaleTimeString();
  document.getElementById("period").innerText = period;
  document.getElementById("bigSmall").innerText = randomChoice(["BIG", "SMALL"]);
  document.getElementById("color").innerText = randomChoice(["GREEN", "RED"]);
  document.getElementById("number").innerText = Math.floor(Math.random() * 10);
  document.getElementById("winrate").innerText = (50 + Math.floor(Math.random() * 51)) + "%";
}

setInterval(generatePrediction, 60000);
window.onload = generatePrediction;

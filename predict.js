function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePrediction() {
    const isBig = Math.random() > 0.5;
    const number = getRandomInt(isBig ? 5 : 0, isBig ? 9 : 4);
    const color = number % 2 === 0 ? "Red" : "Green";
    const winrate = getRandomInt(75, 100);

    const now = new Date();
    const period = now.getTime().toString().slice(-3);
    const timeString = now.toLocaleTimeString();

    document.getElementById("prediction").innerText = isBig ? "Big" : "Small";
    document.getElementById("number").innerText = number;
    document.getElementById("color").innerText = color;
    document.getElementById("winrate").innerText = winrate;
    document.getElementById("time").innerText = "Waktu: " + timeString;
    document.getElementById("period").innerText = "Periode: #" + period;
}

setInterval(generatePrediction, 60000);
window.onload = generatePrediction;

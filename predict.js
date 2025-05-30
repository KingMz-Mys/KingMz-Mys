
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generatePrediction() {
    let isBig = Math.random() > 0.5;
    let number = getRandomInt(isBig ? 5 : 0, isBig ? 9 : 4);
    let color = number % 2 === 0 ? "Red" : "Green";
    let winrate = getRandomInt(75, 100);

    document.getElementById("prediction").innerText = isBig ? "Big" : "Small";
    document.getElementById("number").innerText = number;
    document.getElementById("color").innerText = color;
    document.getElementById("winrate").innerText = winrate;
    document.getElementById("time").innerText = "Waktu: " + new Date().toLocaleTimeString();
    document.getElementById("period").innerText = "Periode: #" + ("" + new Date().getTime()).slice(-3);
}
setInterval(generatePrediction, 60000);
window.onload = generatePrediction;

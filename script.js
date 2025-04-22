function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePrediction() {
    const bigsmall = Math.random() > 0.5 ? "BIG" : "SMALL";
    const color = Math.random() > 0.5 ? "GREEN" : "RED";
    const number = getRandom(0, 9);
    const winrate = getRandom(50, 100) + "%";

    document.getElementById("bigsmall").textContent = bigsmall;
    document.getElementById("color").textContent = color;
    document.getElementById("number").textContent = number;
    document.getElementById("winrate").textContent = winrate;

    const now = new Date();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById("period").textContent = 
        `Period: ${now.getHours()}${minutes}${seconds}`;
}

generatePrediction();
setInterval(generatePrediction, 60000);

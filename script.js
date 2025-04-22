function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePrediction() {
    const bigSmall = Math.random() > 0.5 ? "Big" : "Small";
    const color = Math.random() > 0.5 ? "Merah" : "Hijau";
    const winrate = getRandomInt(50, 100);
    const now = new Date();
    const time = now.toLocaleTimeString();
    const period = now.getFullYear().toString() + 
                  (now.getMonth()+1).toString().padStart(2, '0') + 
                  now.getDate().toString().padStart(2, '0') + 
                  getRandomInt(100,999);

    return `
        <h2>Periode: ${period}</h2>
        <p><strong>Waktu:</strong> ${time}</p>
        <p><strong>Prediksi:</strong> ${bigSmall} - ${color}</p>
        <p><strong>Winrate:</strong> ${winrate}%</p>
        <p class="status">Status: Menunggu hasil (live)</p>
    `;
}

function displayPrediction() {
    const container = document.getElementById("predictionContainer");
    container.innerHTML = generatePrediction();
}

function uploadAdminFile() {
    const fileInput = document.getElementById('adminFile');
    const file = fileInput.files[0];
    if (!file) return alert("Sila pilih fail JSON!");

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const data = JSON.parse(event.target.result);
            if (data.username && data.password) {
                localStorage.setItem("username", data.username);
                localStorage.setItem("password", data.password);
                alert("Username/password telah dikemas kini!");
            } else {
                alert("Fail tidak sah. Gunakan format JSON yang betul.");
            }
        } catch (e) {
            alert("Fail bukan JSON yang sah!");
        }
    };
    reader.readAsText(file);
}

setInterval(displayPrediction, 60000);
displayPrediction();

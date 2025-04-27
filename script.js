const adminCredentials = { username: 'CustomerPD', password: 'CustomerVVIP' };
let period = 1;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('prediction-container').style.display = 'block';
        startPredictionCycle();
    } else {
        alert('Invalid login credentials');
    }
}

function startPredictionCycle() {
    setInterval(() => {
        document.getElementById('loading').style.display = 'block';
        document.getElementById('status').innerText = 'Waiting Next Period...';
        setTimeout(() => {
            const prediction = generatePrediction();
            document.getElementById('prediction-value').innerText = prediction;
            document.getElementById('status').innerText = 'Prediction Updated!';
            document.getElementById('loading').style.display = 'none';
        }, 2000);
    }, 60000); // 60 seconds cycle
}

function generatePrediction() {
    const winRate = Math.floor(Math.random() * 51) + 50; // 50-100%
    const predictionType = Math.random() > 0.5 ? 'Big' : 'Small';
    const color = Math.random() > 0.5 ? 'Green' : 'Red';
    const number = predictionType === 'Big' ? Math.floor(Math.random() * 5) + 5 : Math.floor(Math.random() * 5);
    return `${predictionType} - ${color} - Number: ${number} (Winrate: ${winRate}%)`;
}

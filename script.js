// Login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            fetch('server.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'login', username, password })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    window.location.href = 'home.html';
                } else {
                    document.getElementById('errorMsg').innerText = data.message;
                }
            });
        });
    }

    const adminForm = document.getElementById('adminForm');
    if (adminForm) {
        adminForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const adminKey = document.getElementById('adminKey').value;
            
            fetch('server.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'adminUpdate', newUsername, newPassword, adminKey })
            })
            .then(res => res.json())
            .then(data => {
                document.getElementById('adminMsg').innerText = data.message;
            });
        });
    }

    if (document.getElementById('bigSmall')) {
        startPrediction();
        setInterval(startPrediction, 60000);
    }
});

// Prediction
function startPrediction() {
    const now = new Date();
    const seconds = now.getSeconds();
    const period = Math.floor((now.getTime() / 60000));
    const timer = 60 - seconds;

    document.getElementById('period').innerText = "Period: " + period;
    document.getElementById('timer').innerText = "Next prediction in: " + timer + "s";

    const number = Math.floor(Math.random() * 10);
    const bigSmall = number >= 5 ? "BIG" : "SMALL";
    const color = number % 2 === 0 ? "RED" : "GREEN";
    const winrate = Math.floor(Math.random() * 50) + 50; // 50-100%

    document.getElementById('bigSmall').innerText = bigSmall;
    document.getElementById('color').innerText = color;
    document.getElementById('number').innerText = number;
    document.getElementById('winrate').innerText = winrate + "%";

    // Simulate result (for demo)
    setTimeout(() => {
        const userNumber = Math.floor(Math.random() * 10);
        let win = false;
        if ((bigSmall === "BIG" && userNumber >= 5) || (bigSmall === "SMALL" && userNumber <= 4)) {
            win = true;
        }
        const resultText = "Number: " + userNumber + " - " + (userNumber % 2 === 0 ? "RED" : "GREEN") + " - " + (win ? "WIN" : "LOSE");
        document.getElementById('result').innerText = resultText;
        if (win) {
            document.getElementById('winSound').play();
        }
    }, 59000); // after 59s
}

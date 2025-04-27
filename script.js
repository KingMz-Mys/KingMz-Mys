const correctUsername = "CustomerVip";
const correctPassword = "CustomerVVIP1";

async function fetchRealPeriod() {
  try {
    const response = await fetch('https://api.mz156.com/lottery/lottery_info?id=1');
    const data = await response.json();
    const realPeriod = data.data.issue; // sesuai response API

    document.getElementById('period').innerText = `Period: ${realPeriod}`;

    // Buat prediksi baru
    generatePrediction();
  } catch (error) {
    console.error('Error fetching period:', error);
    document.getElementById('period').innerText = `Period: Error loading`;
  }
}

function startCountdown() {
  let counter = 60;
  const countdownElement = document.getElementById('countdown');
  countdownElement.textContent = `Next prediction in: ${counter}s`;

  const interval = setInterval(() => {
    counter--;
    countdownElement.textContent = `Next prediction in: ${counter}s`;

    if (counter <= 0) {
      clearInterval(interval);
      fetchRealPeriod();
      startCountdown();
    }
  }, 1000);
}

function generatePrediction() {
  document.getElementById('bigSmall').innerText = Math.random() > 0.5 ? 'BIG' : 'SMALL';
  document.getElementById('color').innerText = Math.random() > 0.5 ? 'RED' : 'GREEN';
  document.getElementById('number').innerText = Math.floor(Math.random() * 10);
  document.getElementById('winrate').innerText = `${50 + Math.floor(Math.random() * 51)}%`;
}

function login() {
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  if (usernameInput === correctUsername && passwordInput === correctPassword) {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    fetchRealPeriod();
    startCountdown();
  } else {
    document.getElementById('loginError').textContent = "Wrong username or password.";
  }
}

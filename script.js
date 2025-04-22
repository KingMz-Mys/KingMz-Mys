function generatePrediction() {
  const bigSmall = Math.random() > 0.5 ? 'BIG' : 'SMALL';
  const colour = Math.random() > 0.5 ? 'GREEN' : 'RED';
  const number = Math.floor(Math.random() * 10);

  document.getElementById('bigSmall').textContent = bigSmall;
  document.getElementById('colour').textContent = colour;
  document.getElementById('number').textContent = number;
}

function syncTimePeriod() {
  const now = new Date();
  const minutes = now.getMinutes();
  const period = now.getHours().toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');

  document.getElementById('timePeriod').innerHTML = `<strong>Periode:</strong> ${period}`;

  generatePrediction();
}

// Run every minute
syncTimePeriod();
setInterval(syncTimePeriod, 60000);

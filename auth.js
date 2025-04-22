document.getElementById('loginForm').onsubmit = function(e) {
  e.preventDefault();
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  
  const savedUser = localStorage.getItem('username') || 'CustomerApps';
  const savedPass = localStorage.getItem('password') || 'CustomerVVIP';

  if (user === savedUser && pass === savedPass) {
    window.location.href = 'dashboard.html';
  } else {
    alert('Username atau Password salah');
  }
};

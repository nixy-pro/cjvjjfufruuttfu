let users = [
  { username: "admin", password: "1234" },
  { username: "nixy", password: "ganteng" }
];

function login() {
  const uname = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const status = document.getElementById("login-status");

  const user = users.find(u => u.username === uname && u.password === pass);

  if (user) {
    localStorage.setItem("loggedInUser", uname);
    showWelcome(uname);
  } else {
    status.textContent = "Username atau password salah!";
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  document.getElementById("login-form").style.display = "block";
  document.getElementById("welcome-section").style.display = "none";
}

function showWelcome(username) {
  document.getElementById("user-name").textContent = username;
  document.getElementById("login-form").style.display = "none";
  document.getElementById("welcome-section").style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser) {
    showWelcome(loggedInUser);
  }
});

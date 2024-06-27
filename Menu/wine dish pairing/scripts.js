const backHome = document.getElementById("back-home");
const reservationsBtn = document.getElementById("reservations");

function navigationHome() {
  window.location.href = "../../homepage/homepage.html";
}

backHome.addEventListener("click", navigationHome);

function reservationsFunction() {
  window.location.href = "../../Reservations/reservations.html";
}

reservationsBtn.addEventListener("click", reservationsFunction);

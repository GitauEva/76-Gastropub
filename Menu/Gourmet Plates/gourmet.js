const backHomeBtn = document.getElementById("back-home");
const reservationBtn = document.getElementById("reservation");

function navigateHome() {
  window.location.href = "../../homepage/index.html";
}

backHomeBtn.addEventListener("click", navigateHome);

function reservationFunction() {
  window.location.href = "../../Reservations/reservations.html";
}

reservationBtn.addEventListener("click", reservationFunction);

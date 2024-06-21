const backHomeBtn = document.getElementById("back-home");

function navigateHome() {
  window.location.href = "../../homepage/homepage.html";
}

backHomeBtn.addEventListener("click", navigateHome);

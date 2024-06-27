let submitBtn = document.querySelector(".submit");

function submitFunction() {
  alert("You have been clicked");
}
submitBtn.addEventListener("click", submitFunction);

let backHome = document.querySelector(".back-home");

function backHomeFunction() {
  window.location.href = "../../homepage/homepage.html";
}

backHome.addEventListener("click", backHomeFunction);

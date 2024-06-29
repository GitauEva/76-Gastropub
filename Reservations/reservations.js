//Declaring variables
let backHome = document.querySelector(".back-home");

//Back Home Functionalities
//Function that gives the button direction
function backHomeFunction() {
  window.location.href = "../../homepage/homepage.html";
}
//Back Home Event Listener
backHome.addEventListener("click", backHomeFunction);

document
  .getElementById("reservationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const reservationData = {
      Date: document.getElementById("date").value,
      Time: document.getElementById("time").value,
      Guests: document.getElementById("guests").value,
      Name: document.getElementById("name").value,
      Email: document.getElementById("email").value,
      Phone: document.getElementById("phone-number").value,
      Dietary: document.getElementById("dietary").value,
      Type: document.getElementById("type").value,
      Requests: document.getElementById("requests").value,
    };
    localStorage.setItem("reservation", JSON.stringify(reservationData));

    // alert("Reservation Submitted Successfully!");
    console.log("Reservation Data:", reservationData);

    // const guestName = document.getElementById("name");
    // const reservationconfirmationTitle = document.querySelector(
    //   ".reservation-confirmation-title"
    // );
    // reservationconfirmationTitle.innerHTML = `Hello ${guestName}!! Your reservation has been confirmed with the following details ${reservationData}`;

    // const mainSection = document.querySelector(".main-section");
    // const reservationSection = document.querySelector(
    //   ".reservation-confirmation"
    // );

    // mainSection.classList.add("hidden-class");
    // reservationSection.classList.remove("hidden-class");
    // document.getElementById("reservationForm").reset();
  });

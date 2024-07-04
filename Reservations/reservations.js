let backHome = document.querySelector(".back-home");
document.querySelector(".back-home").addEventListener("click", function () {
  window.location.href = "../../homepage/homepage.html";
});

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

    console.log("Reservation Data:", reservationData);

    //getting the user name as well as the display location
    const guestName = document.getElementById("name").value;
    const reservationConfirmationTitle = document.querySelector(
      ".reservation-confirmation-title"
    );

    //getting contact info
    const emailAddress = document.getElementById("email").value;
    const reservationEmail = document.querySelector(".reservation-email");
    const phoneNumber = document.getElementById("phone-number").value;
    const reservationPhone = document.querySelector(".reservation-phone");

    //getting the date
    const date = document.getElementById("date").value;
    let reservationDate = document.querySelector(".reservation-date");

    //getting time
    const time = document.getElementById("time").value;
    let reservationTime = document.querySelector(".reservation-time");

    //getting number of guests
    const guests = document.getElementById("guests").value;
    let reservationGuests = document.querySelector(".reservation-guests");

    //getting and display dietary restriction
    const dietaryRestriction = document.getElementById("dietary").value;
    let reservationDietary = document.querySelector(".reservation-dietary");

    //special occasion
    const specialOccasion = document.getElementById("type").value;
    let reservationType = document.querySelector(".reservation-type");

    //additional requests
    const additionalRequests = document.getElementById("requests").value;
    let reservationRequests = document.querySelector(".reservation-requests");

    reservationConfirmationTitle.innerHTML = `Hello ${guestName}!! Your reservation has been confirmed with the following details:`;
    reservationEmail.innerHTML = `Email: ${emailAddress}`;
    reservationPhone.innerHTML = `Phone Number: ${phoneNumber}`;
    reservationDate.innerHTML = `Date: ${date}`;
    reservationTime.innerHTML = `Time: ${time}`;
    reservationGuests.innerHTML = `Number of Guests: ${guests}`;
    reservationDietary.innerHTML = `Dietary Restrictions: ${dietaryRestriction}`;
    reservationType.innerHTML = `Special Occasions: ${specialOccasion}`;
    reservationRequests.innerHTML = `Additional Requests: ${additionalRequests}`;

    const mainSection = document.querySelector(".main-section");
    const reservationSection = document.querySelector(
      ".reservation-confirmation"
    );

    mainSection.classList.add("hidden-class");
    reservationSection.classList.remove("hidden-class");
    document.getElementById("reservationForm").reset();
  });

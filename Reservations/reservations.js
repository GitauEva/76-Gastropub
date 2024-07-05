// let backHome = document.querySelector(".back-home");
// document.querySelector(".back-home").addEventListener("click", function () {
//   window.location.href = "../../homepage/homepage.html";
// });

// document
//   .getElementById("reservationForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const reservationData = {
//       Date: document.getElementById("date").value,
//       Time: document.getElementById("time").value,
//       Guests: document.getElementById("guests").value,
//       Name: document.getElementById("name").value,
//       Email: document.getElementById("email").value,
//       Phone: document.getElementById("phone-number").value,
//       Dietary: document.getElementById("dietary").value,
//       Type: document.getElementById("type").value,
//       Requests: document.getElementById("requests").value,
//     };
//     localStorage.setItem("reservation", JSON.stringify(reservationData));

//     console.log("Reservation Data:", reservationData);

//     //getting the user name as well as the display location
//     const guestName = document.getElementById("name").value;
//     const reservationConfirmationTitle = document.querySelector(
//       ".reservation-confirmation-title"
//     );

//     //getting contact info
//     const emailAddress = document.getElementById("email").value;
//     const reservationEmail = document.querySelector(".reservation-email");
//     const phoneNumber = document.getElementById("phone-number").value;
//     const reservationPhone = document.querySelector(".reservation-phone");

//     //getting the date
//     const date = document.getElementById("date").value;
//     let reservationDate = document.querySelector(".reservation-date");

//     //getting time
//     const time = document.getElementById("time").value;
//     let reservationTime = document.querySelector(".reservation-time");

//     //getting number of guests
//     const guests = document.getElementById("guests").value;
//     let reservationGuests = document.querySelector(".reservation-guests");

//     //getting and display dietary restriction
//     const dietaryRestriction = document.getElementById("dietary").value;
//     let reservationDietary = document.querySelector(".reservation-dietary");

//     //special occasion
//     const specialOccasion = document.getElementById("type").value;
//     let reservationType = document.querySelector(".reservation-type");

//     //additional requests
//     const additionalRequests = document.getElementById("requests").value;
//     let reservationRequests = document.querySelector(".reservation-requests");

//     //date validation
//     const dateError = document.getElementById("dateError");
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     //clear any previous error messages
//     dateError.style.display = "none";

//     if (date < today) {
//       dateError.textContent = "The date cannot be in the past";
//       dateError.style.display = "block";
//     } else {
//       reservationConfirmationTitle.innerHTML = `Hello ${guestName}!! Your reservation has been confirmed with the following details:`;
//       reservationEmail.innerHTML = `Email: ${emailAddress}`;
//       reservationPhone.innerHTML = `Phone Number: ${phoneNumber}`;
//       reservationDate.innerHTML = `Date: ${date}`;
//       reservationTime.innerHTML = `Time: ${time}`;
//       reservationGuests.innerHTML = `Number of Guests: ${guests}`;
//       reservationDietary.innerHTML = `Dietary Restrictions: ${dietaryRestriction}`;
//       reservationType.innerHTML = `Special Occasions: ${specialOccasion}`;
//       reservationRequests.innerHTML = `Additional Requests: ${additionalRequests}`;

//       const mainSection = document.querySelector(".main-section");
//       const reservationSection = document.querySelector(
//         ".reservation-confirmation"
//       );

//       mainSection.classList.add("hidden-class");
//       reservationSection.classList.remove("hidden-class");
//       document.getElementById("reservationForm").reset();
//     }
//   });

// document
//   .getElementById("reservationForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     const reservationData = {
//       Date: document.getElementById("date").value,
//       Time: document.getElementById("time").value,
//       Guests: document.getElementById("guests").value,
//       Name: document.getElementById("name").value,
//       Email: document.getElementById("email").value,
//       Phone: document.getElementById("phone-number").value,
//       Dietary: document.getElementById("dietary").value,
//       Type: document.getElementById("type").value,
//       Requests: document.getElementById("requests").value,
//     };
//     localStorage.setItem("reservation", JSON.stringify(reservationData));

//     console.log("Reservation Data:", reservationData);

//     // Getting the user name as well as the display location
//     const guestName = document.getElementById("name").value;
//     const reservationConfirmationTitle = document.querySelector(
//       ".reservation-confirmation-title"
//     );

//     // Getting contact info
//     const emailAddress = document.getElementById("email").value;
//     const reservationEmail = document.querySelector(".reservation-email");
//     const phoneNumber = document.getElementById("phone-number").value;
//     const reservationPhone = document.querySelector(".reservation-phone");

//     // Getting the date
//     const date = new Date(document.getElementById("date").value);
//     let reservationDate = document.querySelector(".reservation-date");

//     // Getting time
//     const time = document.getElementById("time").value;
//     let reservationTime = document.querySelector(".reservation-time");

//     // Getting number of guests
//     const guests = document.getElementById("guests").value;
//     let reservationGuests = document.querySelector(".reservation-guests");

//     // Getting and display dietary restriction
//     const dietaryRestriction = document.getElementById("dietary").value;
//     let reservationDietary = document.querySelector(".reservation-dietary");

//     // Special occasion
//     const specialOccasion = document.getElementById("type").value;
//     let reservationType = document.querySelector(".reservation-type");

//     // Additional requests
//     const additionalRequests = document.getElementById("requests").value;
//     let reservationRequests = document.querySelector(".reservation-requests");

//     // Date validation
//     const dateError = document.getElementById("dateError");
//     const today = new Date();
//     today.setDate(today.getDate() + 2); // Add 2 days to today
//     const minDate = today.toISOString().split("T")[0]; // Format the date as YYYY-MM-DD
//     dateInput.setAttribute("min", minDate);

//     // Clear any previous error messages
//     dateError.style.display = "none";

//     if (date < minDate) {
//       dateError.textContent =
//         "To ensure we provide you with the best experience, please note that all reservations must be made at least 2 days in advance. This allows us to prepare and accommodate your requests appropriately.Thank you for your understanding and cooperation. We look forward to serving you!";
//       dateError.style.display = "block";
//     } else {
//       reservationConfirmationTitle.innerHTML = `Hello ${guestName}!! Your reservation has been confirmed with the following details:`;
//       reservationEmail.innerHTML = `Email: ${emailAddress}`;
//       reservationPhone.innerHTML = `Phone Number: ${phoneNumber}`;
//       reservationDate.innerHTML = `Date: ${date.toDateString()}`;
//       reservationTime.innerHTML = `Time: ${time}`;
//       reservationGuests.innerHTML = `Number of Guests: ${guests}`;
//       reservationDietary.innerHTML = `Dietary Restrictions: ${dietaryRestriction}`;
//       reservationType.innerHTML = `Special Occasions: ${specialOccasion}`;
//       reservationRequests.innerHTML = `Additional Requests: ${additionalRequests}`;

//       const mainSection = document.querySelector(".main-section");
//       const reservationSection = document.querySelector(
//         ".reservation-confirmation"
//       );

//       mainSection.classList.add("hidden-class");
//       reservationSection.classList.remove("hidden-class");
//       document.getElementById("reservationForm").reset();
//     }
//   });
document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("date");
  const today = new Date();
  today.setDate(today.getDate() + 2); // Add 2 days to today
  const minDate = today.toISOString().split("T")[0]; // Format the date as YYYY-MM-DD
  dateInput.setAttribute("min", minDate);

  // Event listener for input change
  dateInput.addEventListener("input", function () {
    validateDate();
  });
});

document
  .getElementById("reservationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateDate();
  });

function validateDate() {
  const dateInput = document.getElementById("date");
  const dateError = document.getElementById("dateError");
  const selectedDate = new Date(dateInput.value);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time part to compare only dates

  const minDate = new Date();
  minDate.setDate(today.getDate() + 2); // Add 2 days to today

  // Clear any previous error messages
  dateError.style.display = "none";

  if (selectedDate < minDate) {
    dateError.textContent = "Invalid Date";
    dateError.style.display = "block";
    return false; // Return false to indicate validation failure
  } else {
    dateError.style.display = "none";
    return true; // Return true to indicate validation success
  }
}

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

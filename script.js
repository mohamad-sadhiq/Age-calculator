// script.js
function calculateAge() {
  const birthdateInput = document.getElementById("birthdate");
  const birthdate = new Date(birthdateInput.value);
  const today = new Date();

  let age = today.getFullYear() - birthdate.getFullYear();
  const month = today.getMonth() - birthdate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }

  const ageResult = document.getElementById("age");
  ageResult.textContent = "Your age is: " + age;
}
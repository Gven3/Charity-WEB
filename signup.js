const form = document.querySelector("#form");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const city = document.querySelector("#city");
const zipCode = document.querySelector("#zip");
const select = document.querySelector("#country");
const signUp = document.querySelector(".signup");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  email.addEventListener("keyup", (e) => {
    validateInputs();
  });
  select.addEventListener("keyup", (e) => {
    validateInputs();
  });
  city.addEventListener("keyup", (e) => {
    validateInputs();
  });
  zipCode.addEventListener("keyup", (e) => {
    validateInputs();
  });
  validateInputs();
  if (
    !email.classList.contains("pseudo") &&
    !country.classList.contains("pseudo") &&
    !city.classList.contains("pseudo") &&
    !zipCode.classList.contains("pseudo")
  ) {
    location.href = "weather.html";
  }
});

const setError = (element, message) => {
  const inputControl = element.parentElement;

  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  element.classList.add("pseudo");
  inputControl.classList.remove("success");
};
const setSuccess = (element, message) => {
  const inputControl = element.parentElement;

  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";

  inputControl.classList.add("success");
  element.classList.remove("pseudo");
  inputControl.classList.remove("error");
};

function isValidEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.ge$/.test(
    email
  );
}
function isValidZip(zipcode) {
  return zipcode.replace(/\D/g, "").length === zipcode.length;
}
const cityRegex = /^[a-zA-Z\s]+$/;

const validateInputs = () => {
  const emailValue = email.value.trim();
  const cityValue = city.value.trim();
  const zipValue = zipCode.value.trim();

  if (emailValue === "" || emailValue === null) {
    setError(email, "Can't be blank");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "invalid email (domain should be '.ge')");
  } else {
    setSuccess(email);
  }
  if (select.value === "") {
    setError(country, "Required");
  } else {
    setSuccess(country);
  }
  if (cityValue === "" || cityValue === null) {
    setError(city, "Required");
  } else if (!cityRegex.test(cityValue)) {
    setError(city, "invalid country");
  } else {
    setSuccess(city);
  }
  if (zipValue === "" || zipValue === null) {
    setError(zip, "Required");
  } else if (!isValidZip(zipValue)) {
    setError(zip, "only numbers");
  } else {
    setSuccess(zipCode);
  }
};

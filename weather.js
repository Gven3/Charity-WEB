// Weather API

const dataCity = document.querySelector("#dataCity");
const dataDate = document.querySelector("#dataDate");
const dataTemp = document.querySelector("#dataTemp");
const dataVisibility = document.querySelector("#dataVisibility");
const dataFeelsLike = document.querySelector("#dataFeelsLike");
const dataHumidity = document.querySelector("#dataHumidity");
const dataWind = document.querySelector("#dataWind");
const desc = document.querySelector("#desc");

const link =
  "https://api.openweathermap.org/data/2.5/weather?q=washington&units=metric&appid=d6e73b4282d3d3a1afc8a0b11b906f28";
fetch(link)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    dataCity.innerText = data.name;
    dataTemp.innerText = data.main.temp;
    dataVisibility.innerHTML = data.visibility;
    dataFeelsLike.innerText = data.main.feels_like;
    dataHumidity.innerText = data.main.humidity;
    dataWind.innerText = data.wind.speed;
    desc.innerText = data.weather[0].description;
  });

// Add Country JS

const addButton = document.getElementById("addButt");
const input = document.getElementById("input");
const icon = document.querySelector("#iconDiv");
const form = document.querySelector(".addDiv");
const addBoxUpper = document.querySelector(".addBoxUpper");
const weatherImg = document.querySelector("#weatherImg");

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  input.classList.toggle("active");
  icon.classList.toggle("active");
  addBoxUpper.classList.toggle("active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const link =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    input.value +
    "&units=metric&appid=d6e73b4282d3d3a1afc8a0b11b906f28";
  fetch(link)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      dataCity.innerText = data.name;
      dataTemp.innerText = data.main.temp;
      dataVisibility.innerHTML = data.visibility;
      dataFeelsLike.innerText = data.main.feels_like;
      dataHumidity.innerText = data.main.humidity;
      dataWind.innerText = data.wind.speed;
      desc.innerText = data.weather[0].description;
    });
});

// dataDate

const today = new Date();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayOfWeek = daysOfWeek[today.getDay()];

const month = (today.getMonth() + 1).toString().padStart(2, "0");

const day = today.getDate().toString().padStart(2, "0");

const year = today.getFullYear();

dataDate.innerText = `${dayOfWeek} ${month}/${day}/${year}`;

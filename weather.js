const dataCity = document.querySelector("#dataCity");
const dataDate = document.querySelector("#dataDate");
const dataTemp = document.querySelector("#dataTemp");
const dataVisibility = document.querySelector("#dataVisibility");
const dataFeelsLike = document.querySelector("#dataFeelsLike");
const dataHumidity = document.querySelector("#dataHumidity");
const dataWind = document.querySelector("#dataWind");

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
  });

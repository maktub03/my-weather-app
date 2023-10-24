//FEATURE 1
let now = new Date();

let h2 = document.querySelector("h2");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h2.innerHTML = `${day} ${hours}:${minutes}`;
//FEATURE 2
function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp-numb").innerHTML = response.data.main.temp =
    Math.round(response.data.main.temp);
}

function searchCity(event) {
  event.preventDefault();
  // let searchInput = document.querySelector("#search-text-input");

  // console.log(searchInput.value);

  // let cityElement = document.querySelector("#city");
  // cityElement.innerHTML = `${searchInput.value}`;
  let apiKey = "9e6c0570e8fd3b878c6d3f38ceaa4b34";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

let form = document.querySelector("#search-form");

form.addEventListener("submit", searchCity);
// CURRENT LOCATION
function searchLocation(position) {
  let apiKey = "9e6c0570e8fd3b878c6d3f38ceaa4b34";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", getCurrentLocation);

//BONUS FEATURE
function fConvert(event) {
  event.preventDefault();
  let tempDegrees = document.querySelector("#temp-numb");
  tempDegrees.innerHTML = 73;
}

function celConvert(event) {
  event.preventDefault();
  let tempDegrees = document.querySelector("#temp-numb");
  tempDegrees.innerHTML = 23;
}

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", fConvert);
let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", celConvert);

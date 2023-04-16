function formatDate(date) {
  let dayElement = document.querySelector("#date");
  let currentTime = new Date();
  let hours = currentTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = currentTime.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return `${days[dayIndex]} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#date");
dateElement.innerHTML = formatDate();

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#");
  let apiKey = "7ed26a6948c661d05fafe7355b41b2ec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${temp}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

// let searchInput = document.querySelector("#search-input");
// let h1 = document.querySelector("h1");
// if (searchInput.value) {
// h1.innerHTML = `${searchInput.value}`;
//} else {
//h1.innerHTML = null;
// alert("Please, insert a city");
//}

function displayTemperature(response) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = `${Math.round(response.data.main.temp)} ºC`;
}

function showTemperature(event) {
  event.preventDefault();
  let tempForm = document.querySelector("#temperature");
  let temp = Math.round(temp.value);
  temp.innerHTML = `${temp} ºC`;
}

function showPosition(position) {
  let button = document.querySelector("button");
  button.innerHTML = `These are your coordinates ${position.coords}`;
  navigator.geolocation.getCurrentPosition(showPosition);
}

let temperatureDescription = document.querySelector("#temperature-description");
temperatureDescription.addEventListener("click", showPosition);

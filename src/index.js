function formatDate(now) {
    let hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let dayIndex = now.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[dayIndex];
    return `${day} ${hours}:${minutes}`;
  }
  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let message = `Current weather ${temperature} degreesF /Forecast:`;
    let h3 = document.querySelector("h3");
    h3.innerHTML = message;
    let iconElement=document.querySelector ("#icon");
    iconElement.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  }
  function search(event) {
    event.preventDefault();
    let apiKey = "3178cd4dc212e1aed68087c7e06933d5";
    let city = document.querySelector("#search-text-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    let cityElement = document.querySelector("#city");
    let searchTextInput = document.querySelector("#search-text-input");
    cityElement.innerHTML = searchTextInput.value;
    axios.get(apiUrl).then(showTemperature);
  }
  let units = "imperial";
  
  let temperatureElement = document.querySelector("#temperature");
  let currentTime = new Date();
  temperatureElement.innerHTML = formatDate(currentTime);
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);

  
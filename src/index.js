function formatDate(timestamp) {
  let date= new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let dayIndex = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[dayIndex];
    return `${day} ${hours}:${minutes}`;
  }
  function showTemperature(response) {
    console.log(response.data.main.temp);
    let windElement=document.querySelector ("#wind");
    let humidityElement= document.querySelector ("#humidity")
    let descriptionElement=document.querySelector ("#description");
    let temperatureElement = document.querySelector("#temperature");
    let dateElement=document.querySelector("#date");
    let iconElement=document.querySelector ("#icon");
      temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}°F|°C`;
    dateElement.innerHTML= formatDate(response.data.dt*1000);
    descriptionElement.innerHTML=(response.data.weather[0].description);
    windElement.innerHTML=`${Math.round(response.data.main.wind)} m/hr`;
    humidityElement.innerHTML= `${(response.data.main.humidity)}%`;
    iconElement.setAttribute ("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  }
  function search(city) {
    let apiKey = "3178cd4dc212e1aed68087c7e06933d5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }
  function handleSubmit (event){
    event.preventDefault();
    let searchTextInputElement = document.querySelector("#search-text-input");
    search(searchTextInputElement.value);
  }
 
  
  let units = "imperial";
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleSubmit);

  
const API_KEY = config.WEATHER_API;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temp = document.querySelector(".temperature");
      const weather = document.querySelector(".weatherCondition");
      const place = document.querySelector(".place");
      const icon = document.querySelector(".weatherIcon");

      weather.innerText = data.weather[0].main;
      temp.innerText = `${data.main.temp.toFixed(1)}°`;
      place.innerText = data.name;

      const iconImage = document.createElement("img");
      iconImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      //   iconImage.style.height = "100%";
      icon.appendChild(iconImage);
    });
}

function onGeoError() {
  place.innerText = "Location Error";
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

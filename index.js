const API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`;

const searchTemperature = () => {
  const city = document.getElementById('city-name').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const setBackground = (weather) => {
  const container = document.querySelector('.container');
  container.className = 'container'; // Reset the class first

  // Add appropriate class based on weather condition
  if (weather.includes('Rain')) {
    container.classList.add('rainy');
  } else if (weather.includes('Clouds')) {
    container.classList.add('cloudy');
    } else if (weather.includes("Haze")) {
      container.classList.add("hazey");
  } else if (weather.includes('Clear')) {
    container.classList.add('sunny');
  } else {
    container.classList.add('default');
  }
};

const displayTemperature = temperature => {
  console.log(temperature);
  setInnerText('city', temperature.name);
  setInnerText('temp', temperature.main.temp);
  setInnerText('weather', temperature.weather[0].main);

  setBackground(temperature.weather[0].main);

  // weather icon settings
  const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById('image-icon');
  imgIcon.setAttribute('src', url);
};
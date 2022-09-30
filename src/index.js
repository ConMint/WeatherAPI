/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-template */
/* eslint-disable operator-linebreak */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */

import '/src/style.css';

// define variables
const img = document.querySelector('img');
let q = 'tokyo';
let mode = 'C';
const searchBtn = document.getElementById('searchBtn');
const citySearch = document.querySelector('input');
const weatherInfo = document.getElementById('weatherInfo');
const cityTemp = document.getElementById('cityTemp');
const cityName = document.getElementById('cityName');
const changeMode = document.getElementById('changeMode');

// function to target specific data from weatherData object
function processWeatherData(weatherData) {
  const iconUrl = weatherData.weather[0].icon;
  img.src = 'http://openweathermap.org/img/wn/' + iconUrl + '@2x.png';
  console.log(weatherData);
  changeMode.onclick = function changeIt() {
    if (mode === 'C') {
      mode = 'F';
      cityTemp.innerText =
        Math.round((weatherData.main.temp * 9) / 5 + 32) + '\xB0F';
      console.log('now F');
      const feelsLike =
        Math.round((weatherData.main.feels_like * 9) / 5 + 32) + '\xB0F';
      weatherInfo.innerText = `Feels like ${feelsLike} | ${weatherData.weather[0].description} | Humidity: ${weatherData.main.humidity}%`;
    } else {
      mode = 'C';
      cityTemp.innerText = Math.round(weatherData.main.temp) + '\xB0C';
      console.log('now C');
      const feelsLike = Math.round(weatherData.main.feels_like) + '\xB0C';
      weatherInfo.innerText = `Feels like ${feelsLike} | ${weatherData.weather[0].description} | Humidity: ${weatherData.main.humidity}%`;
    }
  };

  cityName.innerText = `${weatherData.name}, ${weatherData.sys.country}`;
  cityTemp.innerText = Math.round(weatherData.main.temp) + '\xB0C';

  const feelsLike = Math.round(weatherData.main.feels_like) + '\xB0C';

  weatherInfo.innerText = `Feels like ${feelsLike} | ${weatherData.weather[0].description} | Humidity: ${weatherData.main.humidity}%`;
}
// get the object weatherData using OpenWeather API
async function getWeatherData() {
  try {
    const response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=' +
        q +
        '&APPID=7293fbd3f556bdc7f99dfbe674fd9cf3&units=metric',
      { mode: 'cors' }
    );
    const weatherData = await response.json();

    processWeatherData(weatherData);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    // eslint-disable-next-line quotes
    alert(
      `Could not find that city. Please try in the form 'city' or 'city,country code'
                              Example: London,GB`
    );
  }
}

onload = getWeatherData;

searchBtn.addEventListener('click', () => {
  q = citySearch.value.split(' ').join('+');
  mode = 'C';
  getWeatherData();
});

citySearch.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    searchBtn.click();
  }
});

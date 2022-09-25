/* eslint-disable comma-dangle */
/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-template */
/* eslint-disable operator-linebreak */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */

import '/src/style.css';

const img = document.querySelector('img');
// const q = 'dogs';

// async function fetchNewgif() {
//   try {
//     const response = await fetch(
//       'https://api.giphy.com/v1/gifs/translate?api_key=byqETZYtjVS3cNVVgdJ9RoZ4QJGApt50&s=' +
//         q,
//       { mode: 'cors' }
//     );
//     const gifdata = await response.json();

//     img.src = gifdata.data.images.original.url;
//   } catch (error) {
//     console.error('There has been a problem with your fetch operation:', error);
//     alert('Something went wrong. Try a different search term.');
//   }
// }

// onload = fetchNewgif;

async function getWeatherData() {
  try {
    const response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=paris&APPID=7293fbd3f556bdc7f99dfbe674fd9cf3&units=metric',
      { mode: 'cors' }
    );
    const weatherData = await response.json();

    const iconUrl = weatherData.weather[0].icon;
    console.log(iconUrl);
    img.src = 'http://openweathermap.org/img/wn/' + iconUrl + '@2x.png';
    console.log(weatherData);
    console.log(weatherData.name);
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}

onload = getWeatherData;

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
const q = 'dogs';

async function fetchNewgif() {
  try {
    const response = await fetch(
      'https://api.giphy.com/v1/gifs/translate?api_key=byqETZYtjVS3cNVVgdJ9RoZ4QJGApt50&s=' +
        q,
      { mode: 'cors' }
    );
    const gifdata = await response.json();

    img.src = gifdata.data.images.original.url;
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
    alert('Something went wrong. Try a different search term.');
  }
}

onload = fetchNewgif;

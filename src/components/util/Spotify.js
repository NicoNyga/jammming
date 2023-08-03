// Spotify.js
import axios from 'axios';
// const spotifyClientId = 'bdc784d639bf41e6a1ba52397ae87c89';
// const spotifyClientSecret = '60580214a15e4e20941e61e37e711ef0';


const fetchData = async (query) => {
  const accessToken = window.location.hash
  .substring(1)
  .split('&')
  .reduce((acc, item) => {
    const parts = item.split('=');
    acc[parts[0]] = parts[1];
    return acc;
  }, {})['access_token'];

  const response = await axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=artist`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
//     'Content-Type': 'application/json'
    }
  });
  return response.data;
};

export { fetchData };

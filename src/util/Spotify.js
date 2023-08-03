import axios from 'axios';
const spotifyClientId = 'bdc784d639bf41e6a1ba52397ae87c89';
const spotifyClientSecret = '60580214a15e4e20941e61e37e711ef0';
const getAccessToken = async () => {
  const response = await axios.post('https://accounts.spotify.com/api/token', {
    client_id: spotifyClientId,
    client_secret: spotifyClientSecret,
    grant_type: 'client_credentials'
  });
  return response.data.acces_token;
};
const fetchData = async () => {
  const accessToken = await getAccessToken();
  const response = await axios.get('https://api.spotify.com/v1/search?q=artist&type=artist', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  console.log(response.data);
};
fetchData();
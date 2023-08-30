// Spotify.js
// const spotifyClientId = 'bdc784d639bf41e6a1ba52397ae87c89';


const fetchData = async (query) => {
  const accessToken = exctractAccessToken();

const response = fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  })
return (await response).json();
};

const savePlaylist = async (playlistName, trackUris) => {
  const accessToken = exctractAccessToken();
  // logic til at oprette playliste og tilføje tracks til listen
}

export { fetchData };
  function exctractAccessToken() {
    return window.location.hash
      .substring(1)
      .split('&')
      .reduce((acc, item) => {
        const parts = item.split('=');
        acc[parts[0]] = parts[1];
        return acc;
      }, {})['access_token'];
  }


const apiKey = process.env.REACT_APP_API_KEY;

export const searchGames = (query) => {
  return fetch(`https://api.rawg.io/api/games?search=${query}&key=${apiKey}`);
};

export const individualGame = (query) => {
  return fetch(`https://api.rawg.io/api/games/${query}?key=ac7de14847e84d37be3b60940720db8c`);
};





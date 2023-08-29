const apiKey = process.env.REACT_APP_API_KEY;

export const searchGames = (query) => {
  return fetch(`https://api.rawg.io/api/games?search=${query}&key=${apiKey}`);
};

export const individualGame = (query) => {
  return fetch(`https://api.rawg.io/api/games/${query}?key=${apiKey}`);
};

export const fetchHorror = () => {
  return fetch(`https://api.rawg.io/api/games?page_size=40&tags=16&key=${apiKey}`);
};

export const fetchIndie = () => {
  return fetch(`https://api.rawg.io/api/games?page_size=40&genres=51&key=${apiKey}`);
};

export const fetchBethesda = () => {
  return fetch(`https://api.rawg.io/api/games?page_size=40&developers=4207&key=${apiKey}`);
};

export const fetchMultiplayer = () => {
  return fetch(`https://api.rawg.io/api/games?page_size=40&tags=7&key=${apiKey}`);
};

export const searchGames = (query) => {
  return fetch(`https://api.rawg.io/api/games?search=${query}&key=ac7de14847e84d37be3b60940720db8c`);
};

export const individualGame = (query) => {
  return fetch(`https://api.rawg.io/api/games/${query}?key=ac7de14847e84d37be3b60940720db8c`);
};

export const fetchHorror = () => {
  return fetch(`https://api.rawg.io/api/games?page_size=40&tags=16&key=ac7de14847e84d37be3b60940720db8c`);
};

export const fetchIndie = () => {
  return fetch(`https://api.rawg.io/api/games?page_size=40&genres=51&key=ac7de14847e84d37be3b60940720db8c`);
};

export const fetchBethesda = () => {
  return fetch(`https://api.rawg.io/api/games?page_size=40&developers=4207&key=ac7de14847e84d37be3b60940720db8c`);
};

export const fetchMultiplayer = () => {
  return fetch(`https://api.rawg.io/api/games?page_size=40&tags=7&key=ac7de14847e84d37be3b60940720db8c`);
};

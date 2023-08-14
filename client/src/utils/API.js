export const searchGames = (query) => {
  return fetch(`https://api.rawg.io/api/games?search=${query}&key=ac7de14847e84d37be3b60940720db8c`);
};

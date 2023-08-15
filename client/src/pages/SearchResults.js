import React, { useEffect, useState } from 'react';
import { searchGames } from '../utils/API'; // Update the path accordingly

function SearchResults() {
  const [games, setGames] = useState([]);
  const searchInput = localStorage.getItem('searchInput');

  useEffect(() => {
    async function fetchGames() {
      try {
        if (searchInput) {
          const response = await searchGames(searchInput);
          const gameData = await response.json();
          setGames(gameData.results);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchGames();
  }, [searchInput]);

  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;

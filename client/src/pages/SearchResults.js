import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
          console.log(gameData.results);
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
          <li key={game.id}>
            <Link to={`/game/${game.id}`}>{game.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;

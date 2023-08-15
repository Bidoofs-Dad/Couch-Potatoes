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
      <div>
        {games.map(game => (
          <div key={game.id}>
            <img src={game.background_image} alt='the game' style={{ width: 350 }}/><br></br>
            <Link to={`/game/${game.id}`}>{game.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

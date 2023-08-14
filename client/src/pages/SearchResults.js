import React, { useEffect, useState } from 'react';
import {searchGames} from '../utils/API'; // Update the path accordingly

function SearchResults() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await searchGames();
        const gameData = await response.json();
        console.log(gameData);
        setGames(gameData.results);
          
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchGames();
  }, []);

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

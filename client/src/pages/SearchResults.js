import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchGames } from '../utils/API';
import '../styles/style.css';

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
    <div className='page-container'>
      <div className='content-container'>
        <div className='games'>
          <div className='game-row'>
            {games.map((game, index) => (
              <div key={game.id} className='game-item'>
                <div className='game-card'>
                  <img src={game.background_image} alt='the game' className='game-image' />
                  <Link to={`/game/${game.id}`} className='game-name'>{game.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;

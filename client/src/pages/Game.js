import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { individualGame } from '../utils/API';

const Game = () => {
    const { gameId } = useParams();
    const [gameDetails, setGameDetails] = useState(null);

    useEffect(() => {
        async function fetchGameDetails() {
            try {
                const response = await individualGame(gameId);
                const gameDetailsData = await response.json();
                console.log(gameDetailsData);
                setGameDetails(gameDetailsData);
            } catch (error) {
                console.error('Error fetching game details:', error);
            }
        }

        fetchGameDetails();
    }, [gameId]);

    if (!gameDetails) {
        return <div>Loading...</div>;
    }

    return (
        <main>

            {/* <div>
                <h1>{gameDetails.name}</h1>
                <p>{gameDetails.description_raw}</p>
    
            </div> */}
            <div className="game-con">
                <div className='pic-con'>
                    <img className="game-pic" src={gameDetails.background_image} alt="The Game!"/>
                </div>

                <div className="game-name">{gameDetails.name}</div>

                <div className='game-Description'>
                <p>{gameDetails.description_raw}</p>
                </div>

                <div className='game-rating1'>Metacritic: {gameDetails.metacritic}/100</div>
                <div className='game-rating2'>User Rating: {gameDetails.rating}/5</div>
            </div>

            <div className='review-con'>
                <form>
                    <input
                        className="review-input"
                        placeholder="Your Review"
                        name="review"
                        type="review"
                    />
                    <button
                        className="btn btn-block btn-primary"
                        style={{ cursor: 'pointer' }}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </main>
    );
};

export default Game;
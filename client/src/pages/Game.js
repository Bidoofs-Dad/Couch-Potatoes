import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { individualGame } from '../utils/API';
import ReviewForm from '../components/ReviewForm';
import '../styles/style.css';

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
            <div className='page-container'>
                <div className='content-container'>
                    <img src={gameDetails.background_image} className='game-image-spec' alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" />

                    <div className="game-name-spec">
                        {gameDetails.name}
                    </div>

                    <div className='game-desc'>
                        <p>{gameDetails.description_raw}</p>
                    </div>

                    <div class="rating-container">
                        <div class="rating">
                            Metacritic: {gameDetails.metacritic}/100
                        </div>
                        <div class="rating">
                            User Rating: {gameDetails.rating}/5
                        </div>
                    </div>

                    <div className='review-con'>
                            <ReviewForm gameId={gameId} gameName={gameDetails.name} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Game;
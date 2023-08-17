import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { individualGame } from '../utils/API';
import ReviewForm from '../components/ReviewForm';

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
            <div className="game-con">

                <div className="game-pic">
                    <img className="game-pic" src={gameDetails.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" />
                    <div className="game-name">{gameDetails.name}</div>

                </div>

                <div className='game-Description'>
                    <p>{gameDetails.description_raw}</p>
                </div>

                <div className='game-rating1'>Metacritic: {gameDetails.metacritic}/100</div>
                <div className='game-rating2'>User Rating: {gameDetails.rating}/5</div>
            </div>

            <div className='review-con'>
                <div style={{ border: '1px dotted #1a1a1a' }}>
                <ReviewForm gameId={gameId} gameName={gameDetails.name} />
                </div>
            </div>
            {/* <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Review</div>
          ) : (
            <ReviewList
              reviews={reviews}
              title="Please leave a review"
            />
          )}
            </div> */}
        </main>
    );
};

export default Game;
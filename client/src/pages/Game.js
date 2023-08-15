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

            <div>
                <h1>{gameDetails.name}</h1>
                <p>{gameDetails.description_raw}</p>
                {/* Other details to display */}
            </div>
            {/* <div className="game-con">
                <div className="game-pic">
                    <div className="game-name"></div>
                </div>

                <div className='game-rating1'></div>
                <div className='game-rating2'></div>
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
            </div> */}

        </main>
    );
};

export default Game;
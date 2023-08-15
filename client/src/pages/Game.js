import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Game = () => {
    const { gameId } = useParams();
    const [gameDetails, setGameDetails] = useState(null);

    return (
        <main>
            <div className="game-con">
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
            </div>

        </main>
    );
};

export default Game;
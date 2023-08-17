import React, { useEffect, useState } from 'react';
import { fetchHorror, fetchIndie, fetchBethesda, fetchMultiplayer } from '../utils/API';
import '../styles/style.css';
import bgate from '../styles/bgateimage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [horrorGames, setHorrorGames] = useState([]);

    useEffect(() => {
        async function fetchHorrorGames() {
            try {
                    const response = await fetchHorror();
                    const horrorData = await response.json();
                    console.log(horrorData.results);
                    setHorrorGames(horrorData.results);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchHorrorGames();
    }, []);

    const randomIndex = () => {
        return Math.floor(Math.random() * horrorGames.length);
    };
    return (
        <main className="page-container">
            <div className="content-container">
                <div className='c-rotate'>
                    <div className='image-container'>
                        <img src={bgate} alt='' className='cImage' />
                        <div className='game-title'>
                            Baldur's Gate III
                        </div>
                    </div>
                    <div className='cIcon-container'>
                        <FontAwesomeIcon icon={faArrowLeft} className="cIcon icon-arrow" />
                        <FontAwesomeIcon icon={faCircle} className="cIcon icon-circle icon-circle-active" />
                        <FontAwesomeIcon icon={faCircle} className="cIcon icon-circle" />
                        <FontAwesomeIcon icon={faCircle} className="cIcon icon-circle" />
                        <FontAwesomeIcon icon={faCircle} className="cIcon icon-circle" />
                        <FontAwesomeIcon icon={faArrowRight} className="cIcon icon-arrow" />
                    </div>
                </div>

                <div className="horizontal-bar">
                    <h1 className="genre-title">HORROR</h1>
                    <div className="bar-content">
                        <FontAwesomeIcon icon={faArrowLeft} className="cIcon icon-arrow sb-Arrow" />
                        <div className="small-box"><img src={horrorGames[randomIndex()]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></div>
                        <div className="small-box"><img src={horrorGames[randomIndex()]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></div>
                        <div className="small-box"><img src={horrorGames[randomIndex()]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></div>
                        <FontAwesomeIcon icon={faArrowRight} className="cIcon icon-arrow sb-Arrow" />
                    </div>
                </div>

                <div className="horizontal-bar">
                    <h1 className="genre-title">INDIE</h1>
                    <div className="bar-content">
                        <FontAwesomeIcon icon={faArrowLeft} className="cIcon icon-arrow sb-Arrow" />
                        <div className="small-box"></div>
                        <div className="small-box"></div>
                        <div className="small-box"></div>
                        <FontAwesomeIcon icon={faArrowRight} className="cIcon icon-arrow sb-Arrow" />
                    </div>
                </div>

                <div className="horizontal-bar">
                    <h1 className="genre-title">BETHESDA</h1>
                    <div className="bar-content">
                        <FontAwesomeIcon icon={faArrowLeft} className="cIcon icon-arrow sb-Arrow" />
                        <div className="small-box"></div>
                        <div className="small-box"></div>
                        <div className="small-box"></div>
                        <FontAwesomeIcon icon={faArrowRight} className="cIcon icon-arrow sb-Arrow" />
                    </div>
                </div>

                <div className="horizontal-bar">
                    <h1 className="genre-title">MULTIPLAYER</h1>
                    <div className="bar-content">
                        <FontAwesomeIcon icon={faArrowLeft} className="cIcon icon-arrow sb-Arrow" />
                        <div className="small-box"></div>
                        <div className="small-box"></div>
                        <div className="small-box"></div>
                        <FontAwesomeIcon icon={faArrowRight} className="cIcon icon-arrow sb-Arrow" />
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Home;
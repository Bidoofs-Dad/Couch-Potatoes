import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchHorror, fetchIndie, fetchBethesda, fetchMultiplayer } from '../utils/API';
import '../styles/style.css';
import bgate from '../styles/bgateimage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [horrorGames, setHorrorGames] = useState([]);
    const [indieGames, setIndieGames] = useState([]);
    const [bethesdaGames, setBethesdaGames] = useState([]);
    const [multiplayerGames, setMultiplayerGames] = useState([]);

    const randomArrayForty = () => {
        return Math.floor(Math.random() * 40);
    }

    const [horrorRandomIndex, setHorrorRandomIndex] = useState(Array.from({ length: 3 }, randomArrayForty));
    const [indieRandomIndex, setIndieRandomIndex] = useState(Array.from({ length: 3 }, randomArrayForty));


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

    useEffect(() => {
        async function fetchIndieGames() {
            try {
                const response = await fetchIndie();
                const indieData = await response.json();
                console.log(indieData.results);
                setIndieGames(indieData.results);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchIndieGames();
    }, []);

    useEffect(() => {
        async function fetchBethesdaGames() {
            try {
                const response = await fetchBethesda();
                const bethesdaData = await response.json();
                console.log(bethesdaData.results);
                setBethesdaGames(bethesdaData.results);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchBethesdaGames();
    }, []);

    useEffect(() => {
        async function fetchMultiplayerGames() {
            try {
                const response = await fetchMultiplayer();
                const multiplayerData = await response.json();
                console.log(multiplayerData.results);
                setMultiplayerGames(multiplayerData.results);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchMultiplayerGames();
    }, []);

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
                        <div className="small-box"><Link to={`/game/${horrorGames[horrorRandomIndex[0]]?.id}`}><img src={horrorGames[horrorRandomIndex[0]]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${horrorGames[horrorRandomIndex[1]]?.id}`}><img src={horrorGames[horrorRandomIndex[1]]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${horrorGames[horrorRandomIndex[2]]?.id}`}><img src={horrorGames[horrorRandomIndex[2]]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <FontAwesomeIcon icon={faArrowRight} className="cIcon icon-arrow sb-Arrow" />
                    </div>
                    {/* <div className="bar-content">
                        <FontAwesomeIcon icon={faArrowLeft} className="cIcon icon-arrow sb-Arrow" />
                        <div className="small-box"><Link to={`/game/${horrorGames[13]?.id}`}><img src={horrorGames[13]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${horrorGames[29]?.id}`}><img src={horrorGames[29]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${horrorGames[26]?.id}`}><img src={horrorGames[26]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <FontAwesomeIcon icon={faArrowRight} className="cIcon icon-arrow sb-Arrow" />
                    </div> */}
                </div>

                <div className="horizontal-bar">
                    <h1 className="genre-title">INDIE</h1>
                    <div className="bar-content">
                        <FontAwesomeIcon icon={faArrowLeft} className="cIcon icon-arrow sb-Arrow" />
                        <div className="small-box"><Link to={`/game/${indieGames[indieRandomIndex[0]]?.id}`}><img src={indieGames[indieRandomIndex[0]]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${indieGames[indieRandomIndex[1]]?.id}`}><img src={indieGames[indieRandomIndex[1]]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${indieGames[indieRandomIndex[2]]?.id}`}><img src={indieGames[indieRandomIndex[2]]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <FontAwesomeIcon icon={faArrowRight} className="cIcon icon-arrow sb-Arrow" />
                    </div>
                </div>

                <div className="horizontal-bar">
                    <h1 className="genre-title">BETHESDA</h1>
                    <div className="bar-content">
                        <FontAwesomeIcon icon={faArrowLeft} className="cIcon icon-arrow sb-Arrow" />
                        <div className="small-box"><Link to={`/game/${bethesdaGames[0]?.id}`}><img src={bethesdaGames[0]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${bethesdaGames[3]?.id}`}><img src={bethesdaGames[3]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${bethesdaGames[5]?.id}`}><img src={bethesdaGames[5]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <FontAwesomeIcon icon={faArrowRight} className="cIcon icon-arrow sb-Arrow" />
                    </div>
                </div>

                <div className="horizontal-bar">
                    <h1 className="genre-title">MULTIPLAYER</h1>
                    <div className="bar-content">
                        <FontAwesomeIcon icon={faArrowLeft} className="cIcon icon-arrow sb-Arrow" />
                        <div className="small-box"><Link to={`/game/${multiplayerGames[8]?.id}`}><img src={multiplayerGames[8]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${multiplayerGames[31]?.id}`}><img src={multiplayerGames[31]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${multiplayerGames[32]?.id}`}><img src={multiplayerGames[32]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <FontAwesomeIcon icon={faArrowRight} className="cIcon icon-arrow sb-Arrow" />
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Home;
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

    // const randomHorrorIndex = () => {
    //     return Math.floor(Math.random() * horrorGames.length);
    // };

    // const randomIndieIndex = () => {
    //     return Math.floor(Math.random() * indieGames.length);
    // };

    // const randomBethesdaIndex = () => {
    //     return Math.floor(Math.random() * bethesdaGames.length);
    // };

    // const randomMultiplayerIndex = () => {
    //     return Math.floor(Math.random() * multiplayerGames.length);
    // };

    // const randomIndex = (max) => {
    //     return Math.floor(Math.random() * max);
    // };

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
                        <div className="small-box"><Link to={`/game/${horrorGames[15]?.id}`}><img src={horrorGames[15]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${horrorGames[29]?.id}`}><img src={horrorGames[29]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${horrorGames[26]?.id}`}><img src={horrorGames[26]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <FontAwesomeIcon icon={faArrowRight} className="cIcon icon-arrow sb-Arrow" />
                    </div>
                </div>

                <div className="horizontal-bar">
                    <h1 className="genre-title">INDIE</h1>
                    <div className="bar-content">
                        <FontAwesomeIcon icon={faArrowLeft} className="cIcon icon-arrow sb-Arrow" />
                        <div className="small-box"><Link to={`/game/${indieGames[3]?.id}`}><img src={indieGames[3]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${indieGames[10]?.id}`}><img src={indieGames[10]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
                        <div className="small-box"><Link to={`/game/${indieGames[26]?.id}`}><img src={indieGames[26]?.background_image} alt="This API doesn't offer alt text </3 But this is a screen cap of whatever game you are looking at!" className='homeGames' /></Link></div>
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
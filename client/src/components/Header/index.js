import React, { useState } from 'react';

import '../components.css'
import cLogo from '../assets/potatoIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClosedCaptioning, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';


import { Link } from 'react-router-dom';
import '../components.css'
import Auth from '../../utils/auth';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');

    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (

        <header>

            <div className='navbar'>
                <Link className='noDecor' to='/'>
                    <img src={cLogo} className='logo icon-container' alt='Couch Potatoes logo'></img>
                    <h1 className='pageName'>COUCH POTATOES</h1>
                </Link>


                <form>
                    <input className="search-bar" type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                    <Link to={`/search-results?search=${searchInput}`} className="custom-button" onClick={() => {
            localStorage.setItem('searchInput', searchInput);
            window.location.assign(`/search-results?search=${searchInput}`); // This line reloads the page
        }} >
                        <FontAwesomeIcon icon={faSearch} className='searchIcon' />
                    </Link>
                </form>

                <div className="links">
                    <Link to='/me' className='user-fav'>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faUser} className="userLink" />
                            <span className="icon-caption">USER</span>
                        </div>
                    </Link>

                    <Link to='/Favorite' className='user-fav'>
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faStar} className="favLink" />
                            <span className="icon-caption">FAVORITE</span>
                        </div>

                    </Link>

                    {Auth.loggedIn() ? (
                        <div className="icon-container">
                            <FontAwesomeIcon icon={faRightToBracket} id="logoutButton" className="logOn-button" onClick={logout}/>
                            <span className="icon-caption">LOGOUT</span>
                        </div>
                    ) : (
                        <Link to='login' className='noDecor'>
                            <div className='icon-container'>
                                <FontAwesomeIcon icon={faArrowRight} id="loginButton" className="logOn-button"/>
                                <span className="icon-caption">LOG IN</span>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};


export default Header;
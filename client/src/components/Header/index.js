import React from 'react';

import '../components.css'
import cLogo from '../assets/potatoIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault ();
        Auth.logout();
    };
    return (
        <header>
            <div className='navbar'>
                <img src='cLogo' alt='Couch Potatoes logo'></img>
                
                <form>
                <input className="search-bar" type="text"/>
                <FontAwesomeIcon icon={faSearch} className='searchIcon' />
                </form>

                <div className="links">
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faUser} className="userLink" />
                        <span className="icon-caption">USER</span>
                    </div>
                    <div className="icon-container">
                        <FontAwesomeIcon icon={faStar} className="favLink" />
                        <span className="icon-caption">FAVORITE</span>
                    </div>
                </div>

                <div>
                    <span id="loginLogoutButtonContainer">
                        <button id="loginButton" className="LogOn-button">Login</button>
                        <button id="logoutButton" className="LogOn-button" style={{ display: 'none' }}>Logout</button>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
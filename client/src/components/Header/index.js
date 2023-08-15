import React, { useState } from 'react';

import '../components.css'
import cLogo from '../assets/potatoIcon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClosedCaptioning, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
                <input className="search-bar" type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                    <Link to={`/search-results?search=${searchInput}`} className="custom-button" onClick={() => localStorage.setItem('searchInput', searchInput)} >
                    <FontAwesomeIcon icon={faSearch} className='searchIcon' />
                    </Link>
                </form>

                <div className="links">
                    <Link to='/Profile' className='user-fav'>
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

                    <Link to='/Login'>
                        <div className='btn'>
                            <span id="loginLogoutButtonContainer">
                                <button id="loginButton" className="LogOn-button">Login</button>
                                <button id="logoutButton" className="LogOn-button" style={{ display: 'none' }}>Logout</button>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};


export default Header;
import React, { useState } from 'react';
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
                <h1>LOGO IMG HERE</h1>
                
                <input
                    className="search-bar"
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />

                <Link
                    to={`/search-results?search=${searchInput}`}
                    className="custom-button"
                    onClick={() => localStorage.setItem('searchInput', searchInput)}
                >
                    Search!
                </Link>
                
                <div className='links'>
                    <h2>Link</h2>
                    <h2>Link</h2>
                </div>
                <div>
                    {Auth.loggedIn() ? (
                        <button className="logout" onClick={logout}>
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link className="login" to="/login">
                                Login
                            </Link>
                            <Link className="signup" to="/signup">
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
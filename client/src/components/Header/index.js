import React from 'react';

import '../components.css'
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
                <h1>LOGO IMG HERE</h1>
                
                <input className="search-bar" type="text"/>
                
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
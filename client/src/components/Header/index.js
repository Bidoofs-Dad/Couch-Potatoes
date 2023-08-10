import React from 'react';
// import { link } from '';

import Auth from '../../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault ();
        Auth.logout();
    };
    return (
        <header>
            <div className='navBar'>
                <h1>LOGO IMG HERE</h1>
                <div className='searchBar'>

                </div>
                <div className='links'>
                    <h2>Link</h2>
                    <h2>Link</h2>
                </div>
                <div>
                    {Auth.loggedIn() ? (
                        <button className="" onClick={logout}>
                            Logout
                        </button>
                    ) : (
                    <>
                    <Link className="" to="/login">
                        Login
                    </Link>
                    <Link className="" to="/signup">
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
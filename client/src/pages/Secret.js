import React from 'react';
import '../styles/style.css';
import seeeeecret from '../components/assets/seecret.png'

const Secret = () => {
return (
    <div className='secretPage'>
        <img src={seeeeecret} alt='secret' className='secret' />
    </div>
    );
};

export default Secret;
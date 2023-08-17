import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ReviewList from '../components/ReviewList';
import '../styles/profile.css';
import donkey from '../styles/donkey.png'

import { QUERY_USERS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USERS : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me"/>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <div>
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
      </div>
    );
  }

  return (
    <div className='page-container'>
    <div className='content-container'>
      <div className='user-profile'>
        <h1>{user.username}'s Profile</h1>
        <div className='profile-info'>
          <img className='profile-photo' src={donkey} alt='User' />
          <div className='user-info'>
            <div className='info-item'>
              <h2>Username:</h2>
              <p>{user.username}</p>
            </div>
            <div className='info-item'>
              <h2>Email:</h2>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='favList'>
        <div className='favCon'>
          <div className='favGame'></div>
        </div>

        <div className='favCon'>
          <div className='favGame'></div>
        </div>

        <div className='favCon'>
          <div className='favGame'></div>
        </div>
      </div>
      
<div className="temp">
          <ReviewList
            reviews={user.reviews}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>

    </div>
  </div>
  );
};

export default Profile;

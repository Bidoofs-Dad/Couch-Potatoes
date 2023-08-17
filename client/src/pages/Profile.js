import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import ReviewList from '../components/ReviewList';

import { QUERY_USERS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import ReviewForm from '../components/ReviewForm';

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
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
        <div>
            <h2>{user.username}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>

        <div className="temp">
          <ReviewList
            reviews={user.reviews}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>

        {!userParam && (
          <div
            className="temp"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            <ReviewForm />
          </div>
        )}
    </div>
  );
};

export default Profile;

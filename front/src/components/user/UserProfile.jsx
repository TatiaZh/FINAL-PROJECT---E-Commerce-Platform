import React from 'react';
import withFetching from '../common/HOCs/withFetching';
import Header from '../common/Header';

const UserProfile = ({ data, isLoading, errors, match }) => {
  if (!data) {
    return <p>Loading ...</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  const { name, username, email } = data;
  return (
    <>
      {errors
        ? errors.map(error => <p key={error.id}>{error.message}</p>)
        : null}
      <Header />
      <div>
        <div>
          <p>Name</p>
          <p>{name}</p>
        </div>
        <div>
          <p>Username</p>
          <p>{username}</p>
        </div>
        <div>
          <p>Email</p>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
};

const DEFAULT_QUERY = '';
const UserProfileWithFetch = withFetching(DEFAULT_QUERY)(UserProfile);

export default UserProfileWithFetch;

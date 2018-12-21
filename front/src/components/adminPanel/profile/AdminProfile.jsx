import React from 'react';
import withFetching from '../../common/HOCs/withFetching';
import { Link } from 'react-router-dom';

const AdminProfile = ({ data, isLoading, errors, match }) => {
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
        <div>
          <Link to={`${match.path}/edit`}>Edit Profile</Link>
        </div>
      </div>
    </>
  );
};

const DEFAULT_QUERY = `users/0`;
const AdminProfileWithFetch = withFetching(DEFAULT_QUERY)(AdminProfile);

export default AdminProfileWithFetch;

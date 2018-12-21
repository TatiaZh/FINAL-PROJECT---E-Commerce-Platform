import React from 'react';
import withFetching from '../../common/HOCs/withFetching';
import UsersTableRow from './UsersTableRow';

const UsersList = ({
  data,
  isLoading,
  error,
  handleDelete,
  handleEdit,
  match
}) => {
  if (!data) {
    return <p>Loading ...</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      {error ? <p>{error}</p> : null}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Products Puchased</th>
            <th>Cart Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <UsersTableRow
              key={item.id}
              item={item}
              onDelete={() => handleDelete(item.id)}
              onEdit={handleEdit}
              match={match}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

const DEFAULT_QUERY = `users`;
const UsersListWithFetch = withFetching(DEFAULT_QUERY)(UsersList);

export default UsersListWithFetch;

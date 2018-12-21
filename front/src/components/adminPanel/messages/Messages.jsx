import React from 'react';
import withFetching from '../../common/HOCs/withFetching';
import Message from './Message';

const Messages = ({ data, isLoading, error, warnings, handleDelete }) => {
  if (!data) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      {warnings
        ? warnings.map(warning => <p key={warning.id}>{warning.message}</p>)
        : null}

      {data.map(item => (
        <Message
          key={item.id}
          item={item}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </>
  );
};

const DEFAULT_QUERY = `admin/messages`;
const MessagesWithFetch = withFetching(DEFAULT_QUERY)(Messages);

export default MessagesWithFetch;

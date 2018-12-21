import React from 'react';
import { Link } from 'react-router-dom';

const BoughtProducts = ({ data, isLoading, error }) => {
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
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {data.boughtProducts.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>
              <Link to={`../../products/${item.id}`}>View Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BoughtProducts;

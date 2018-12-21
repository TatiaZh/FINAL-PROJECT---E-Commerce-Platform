import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditableCell from '../../common/inputs/EditableCell';
import { Link } from 'react-router-dom';

class UsersTableRow extends Component {
  render() {
    const { item, onDelete, match } = this.props;
    return (
      <>
        {!item.isAdmin ? (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <EditableCell
                onEdit={this.props.onEdit}
                item={item}
                value={item.username}
                name="username"
              />
            </td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>
              {item.boughtProducts.length > 0 ? (
                <Link to={`${match.path}/${item.id}/boughtProducts`}>
                  See List
                </Link>
              ) : (
                'None'
              )}
            </td>
            <td>{item.cart.length > 0 ? 'Active' : 'Empty'}</td>
            <td>
              <FontAwesomeIcon
                icon="trash-alt"
                className="icon"
                onClick={onDelete}
              />
            </td>
          </tr>
        ) : null}
      </>
    );
  }
}

export default UsersTableRow;

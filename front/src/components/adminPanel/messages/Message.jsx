import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Message extends Component {
  render() {
    const { item, onDelete } = this.props;
    const { title, sender, dateSent, text } = item;
    return (
      <>
        <div>
          <div>
            <p>Title</p> <p>{title}</p>
          </div>
          <div>
            From
            <div>
              <p>Name</p> <p>{`${sender.name} ${sender.surname}`}</p>
            </div>
            <div>
              <p>Email</p> <p>{sender.email}</p>
            </div>
          </div>
          <div>
            <p>Date Sent</p> <p>{dateSent}</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon="trash-alt"
              className="icon"
              onClick={onDelete}
            />
          </div>
        </div>
        <div>{text}</div>
      </>
    );
  }
}

export default Message;

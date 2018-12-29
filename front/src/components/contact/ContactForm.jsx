import React from 'react';
import '../../CSS/ContactForm.css';

class ContactForm extends React.Component {
  state = {
    formControls: {
      title: '',
      text: '',
      name: '',
      surname: '',
      email: ''
    }
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch('http://localhost:5000/api/admin/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.formControls)
    });
  };
  onChange = event => {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    const formControls = { ...this.state.formControls };
    formControls[name] = value;
    this.setState({ formControls });
  };

  render() {
    return (
      <form action="" method="POST" onSubmit={this.handleSubmit}>
        <div className="form__row">
          <label>Name *</label>
        </div>
        <div className="form__row--name">
          <div className="form__row--left">
            <input
              name="name"
              type="text"
              onChange={event => this.onChange(event)}
            />
            <label className="label__little">First Name</label>
          </div>
          <div className="form__row--right">
            <input
              name="surname"
              type="text"
              onChange={event => this.onChange(event)}
            />
            <label className="label__little">Last Name</label>
          </div>
        </div>
        <div className="form__row">
          <label>Email Address *</label>
        </div>
        <div className="form__row">
          <input
            name="email"
            type="text"
            onChange={event => this.onChange(event)}
          />
        </div>
        <div className="form__row">
          <label>Subject *</label>
        </div>
        <div className="form__row">
          <input
            name="title"
            type="text"
            onChange={event => this.onChange(event)}
          />
        </div>
        <div className="form__row">
          <label>Message *</label>
        </div>
        <div className="form__row">
          <input
            name="text"
            type="text"
            onChange={event => this.onChange(event)}
          />
        </div>
        <div className="form__row">
          <input className="black-white-button" type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default ContactForm;
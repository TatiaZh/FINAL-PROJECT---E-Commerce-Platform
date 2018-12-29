import React from 'react';
import '../../CSS/ContactForm.css';
import SweetAlert from 'sweetalert2-react';

class ContactForm extends React.Component {
  state = {
    show: false,
    message: null,
    notSend: 'Please check your email!',
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
    if (name == 'email') {
      if (this.validateEmail(value)) {
        this.state.message = 'Your message has been sent succesfully!';
      } else {
        this.state.message = this.state.notSend;
      }
    }
    this.setState({ formControls });
  };
  validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  };
  formAlert () {
    this.setState({ show: false });
  };
  render() {
    return (
      <form action="" method="POST" onSubmit={this.handleSubmit}>
        <div className="form__row--nameTitle">
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
          <input className="black-white-button" type="submit" value="Submit" onClick={() => this.setState({ show: true })} />
          <SweetAlert
            show={this.state.show}
            title="Notification"
            text = {this.state.message}
            onConfirm={() => this.formAlert()}
          />
        </div>
      </form>
    );
  }
}

export default ContactForm;

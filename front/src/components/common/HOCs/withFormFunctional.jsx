import React, { Component } from 'react';
import axios from 'axios';
import validate from '../validation';

const withFormFunctional = formControls => Comp => {
  return class WithFormFunctional extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formIsValid: false,
        formControls: formControls,
        isLoading: false,
        done: false,
        error: null,
        data: null
      };

      for (let item in this.state.formControls) {
        const prop = this.state.formControls[item];

        prop.touched = prop.touched || false;
        prop.valid = prop.touched || false;
        if (!prop.validationRules || !prop.validationRules.isRequired) {
          prop.valid = true;
          prop.touched = true;
        }
      }
    }

    handleErrors = err => {
      const error = err.response.data.message;
      this.setState({ error });
    };

    handleChange = event => {
      const name = event.target.name;
      const value =
        name === 'enabled' ? event.target.checked : event.target.value;

      const updatedControls = {
        ...this.state.formControls
      };

      const updatedProductForm = {
        ...updatedControls[name]
      };

      updatedProductForm.value = value;
      updatedProductForm.touched = true;

      if (name === 'repeatNewPassword') {
        updatedProductForm.valid = validate(
          value,
          updatedProductForm.validationRules,
          this.state.formControls.newPassword.value
        );
      } else {
        updatedProductForm.valid = validate(
          value,
          updatedProductForm.validationRules
        );
      }

      updatedControls[name] = updatedProductForm;

      let formIsValid = true;
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }

      this.setState({
        formControls: updatedControls,
        formIsValid: formIsValid
      });
    };

    handleSubmit = e => {
      e.preventDefault();
      this.setState({ isLoading: true });

      const updatedControls = { ...this.state.formControls };
      let body = {};

      for (let property in updatedControls) {
        body[property] = updatedControls[property].value;
      }

      if (this.props.method === 'add') {
        const url = this.props.url;
        axios
          .post(url, body)
          .then(res => {
            this.setState({ error: null, data: res.data });

            setTimeout(
              () => this.setState({ isLoading: false, done: true }),
              1000
            );
            setTimeout(() => this.setState({ done: false }), 2000);
          })
          .catch(err => {
            this.handleErrors(err);
            setTimeout(() => this.setState({ isLoading: false }), 1000);
          });
      }

      if (this.props.method === 'edit') {
        console.log(this.props.url);
        const url = this.props.url;
        axios
          .put(url, body)
          .then(res => {
            this.setState({ error: null });

            setTimeout(
              () => this.setState({ isLoading: false, done: true }),
              1000
            );
            setTimeout(() => this.setState({ done: false }), 2000);
          })
          .catch(err => {
            this.handleErrors(err);
            setTimeout(() => this.setState({ isLoading: false }), 1000);
          });
      }
    };

    render() {
      return (
        <Comp
          {...this.props}
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  };
};

export default withFormFunctional;

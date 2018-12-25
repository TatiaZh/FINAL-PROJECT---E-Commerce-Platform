import React from 'react';
import { Redirect } from 'react-router-dom';
import TextInput from './inputs/TextInput';
import PasswordInput from './inputs/PasswordInput';
import Header from '../common/Header';

import '../../CSS/login.css';
import icon from '../../images/login-icon.png';

const LoginForm = ({
  formIsValid,
  formControls,
  error,
  data,
  handleChange,
  handleSubmit
}) => {
  const { username, password } = formControls;

  if (data) {
    localStorage.setItem('user', JSON.stringify(data));
    window.location = data.isAdmin ? `/admin` : `/user/profile`;
  }

  return (
    <>
      <Header />
      <div className="form-wrapper">
        <h1 className="form-title">Welcome</h1>
        <div className="login-icon">
          <img src={icon} alt="icon" className="login-icon--image" />
        </div>
        {error ? <p className="form-error">{error}</p> : null}
        <form
          onSubmit={handleSubmit}
          className="form-container form-container--login"
        >
          <TextInput
            type="text"
            name="username"
            defaultValue={username.value}
            placeholder={username.placeholder}
            touched={username.touched}
            valid={username.valid}
            onChange={handleChange}
            className="form-input form-input--login"
          />
          <PasswordInput
            type="password"
            name="password"
            defaultValue={password.value}
            placeholder={password.placeholder}
            touched={password.touched}
            valid={password.valid}
            onChange={handleChange}
            className="form-input form-input--login"
          />
          <button
            type="submit"
            disabled={!formIsValid}
            className="form-button form-button--login"
          >
            Login
          </button>
        </form>
        {localStorage.user && (
          <Redirect to={`/users/${JSON.parse(localStorage.user).id}/profile`} />
        )}
      </div>
    </>
  );
};

export default LoginForm;

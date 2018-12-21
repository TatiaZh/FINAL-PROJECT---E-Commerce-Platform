import React from 'react';
import TextInput from '../../common/inputs/TextInput';
import PasswordInput from '../../common/inputs/PasswordInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminProfileForm = ({
  formIsValid,
  formControls,
  isLoading,
  error,
  handleChange,
  handleSubmit
}) => {
  const {
    name,
    username,
    email,
    oldPassword,
    newPassword,
    repeatNewPassword
  } = formControls;

  return (
    <>
      {error ? <p>{error}</p> : null}
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          name="name"
          defaultValue={name.value}
          placeholder={name.placeholder}
          touched={name.touched}
          valid={name.valid}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          name="username"
          defaultValue={username.value}
          placeholder={username.placeholder}
          touched={username.touched}
          valid={username.valid}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          name="email"
          defaultValue={email.value}
          placeholder={email.placeholder}
          touched={email.touched}
          valid={email.valid}
          onChange={handleChange}
        />
        <PasswordInput
          type="password"
          name="oldPassword"
          defaultValue={oldPassword.value}
          placeholder={oldPassword.placeholder}
          touched={oldPassword.touched}
          valid={oldPassword.valid}
          onChange={handleChange}
        />
        <PasswordInput
          type="password"
          name="newPassword"
          defaultValue={newPassword.value}
          placeholder={newPassword.placeholder}
          touched={newPassword.touched}
          valid={newPassword.valid}
          onChange={handleChange}
        />
        <PasswordInput
          type="password"
          name="repeatNewPassword"
          defaultValue={repeatNewPassword.value}
          placeholder={repeatNewPassword.placeholder}
          touched={repeatNewPassword.touched}
          valid={repeatNewPassword.valid}
          onChange={handleChange}
        />
        <button type="submit" disabled={!formIsValid}>
          {isLoading ? <FontAwesomeIcon icon="spinner" spin /> : 'Save'}
        </button>
      </form>
    </>
  );
};

export default AdminProfileForm;

import React from "react";
import TextInput from "../../common/inputs/TextInput";
import TextArea from "../../common/inputs/TextArea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserForm = ({
  formIsValid,
  formControls,
  isLoading,
  error,
  method,
  handleChange,
  handleSubmit
}) => {
  const {
    id,
    name,
    username,
    email,
    password,
    age,
    birthday,
    phone,
    balance,
    broughtProducts,
    cart
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
        <PasswrodInput
          type="text"
          name="newPassword"
          maxLength={password.validationRules.maxLength}
          defaultValue={password.value}
          placeholder={password.placeholder}
          touched={password.touched}
          valid={password.valid}
          onChange={handleChange}
        />
        <PasswrodInput
          type="text"
          name="repeatNewPassword"
          maxLength={password.validationRules.maxLength}
          defaultValue={password.value}
          placeholder={password.placeholder}
          touched={password.touched}
          valid={password.valid}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          name="age"
          maxLength={age.validationRules.maxLength}
          defaultValue={age.value}
          placeholder={age.placeholder}
          touched={age.touched}
          valid={age.valid}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          name="birthday"
          maxLength={birthday.validationRules.maxLength}
          defaultValue={birthday.value}
          placeholder={birthday.placeholder}
          touched={birthday.touched}
          valid={birthday.valid}
          onChange={handleChange}
        />
        <TextInput
          type="text"
          name="phone"
          maxLength={phone.validationRules.maxLength}
          defaultValue={phone.value}
          placeholder={phone.placeholder}
          touched={phone.touched}
          valid={phone.valid}
          onChange={handleChange}
        />
        

       
        <button type="submit" disabled={!formIsValid}>
          {isLoading ? (
            <FontAwesomeIcon icon="spinner" spin />
          ) : method === "add" ? (
            "Submit"
          ) : (
            {/* "Edit" */}
          )}
        </button>
      </form>
    </>
  );
};
export default UserForm;

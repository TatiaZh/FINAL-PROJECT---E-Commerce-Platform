import React from 'react';

const TextInput = props => {
  let formControl = 'form-control';
  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
  }

  const { touched, valid, ...inputprops } = props;

  return <input type="password" className={formControl} {...inputprops} />;
};

export default TextInput;

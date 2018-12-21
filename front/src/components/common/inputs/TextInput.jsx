import React from 'react';

const TextInput = props => {
  let formControl = 'form-control';
  // props.touched &&
  if (!props.valid) {
    formControl = 'form-control control-error';
  }

  const { touched, valid, ...inputprops } = props;

  return <input type="text" className={formControl} {...inputprops} />;
};

export default TextInput;

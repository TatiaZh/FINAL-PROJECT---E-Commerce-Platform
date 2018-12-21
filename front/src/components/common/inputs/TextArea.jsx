import React from 'react';

const TextArea = props => {
  let formControl = 'form-control';

  if (props.touched && !props.valid) {
    formControl = 'form-control control-error';
  }

  const { touched, valid, ...inputprops } = props;

  return <textarea className={formControl} {...inputprops} />;
};

export default TextArea;

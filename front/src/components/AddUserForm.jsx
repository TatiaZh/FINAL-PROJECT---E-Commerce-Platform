import React from "react";
import withFormFunctional from "../../common/HOCs/withFormFunctional";
import ProductForm from "./ProductForm";

const AddUserForm = props => {
  const formControls = {
    name: {
      value: "",
      placeholder: "Your Name",
      validationRules: {
        maxLength: 250,
        isRequired: true
      }
    },
    username: {
      value: "",
      placeholder: "Choose an username",
      validationRules: {
        format: /^[a-zA-Z\-]+$/,
        isRequired: true
      }
    },
    email: {
      value: "",
      placeholder: "Your Email",
      validationRules: {
        isRequired: true
      }
    },
    newPassword: {
      value: "",
      placeholder: "Your Password",
      validationRules: {
        minLength: 8,
        maxLength: 30,
        isRequired: true
      }
    },
    repeatNewPassword: {
      value: "",
      placeholder: "Repeat New Password",
      validationRules: {
        minLength: 8,
        maxLength: 30,
        matchPassword: true
      }
    },
    age: {
      value: "",
      placeholder: "Age",
      validationRules: {
        format: /^[0-9]+$/,
        isRequired: true
      }
    },
    birthday: {
      value: "",
      placeholder: "Date of your birth",
      validationRules: {
        format: /^[0-9]+$/,
        isRequired: true
      }
    },
    phone: {
      value: "",
      placeholder: "Your mobile phone",
      validationRules: {
        format:  /^\d{4}-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/,
        isRequired: true
      }
    }
  };
  const UserFormWithFormFunctional = withFormFunctional(formControls)(
    ProductForm
  );
  return <UserFormWithFormFunctional method="add" {...props} />;
};

export default AddUserForm;

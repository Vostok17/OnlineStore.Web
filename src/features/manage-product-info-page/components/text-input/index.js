import React from 'react';
import { ErrorMessage, useField } from 'formik';
import './text-input.css';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="text-input mb-2">
      <label htmlFor={field.name} className="text-input__label">
        {label}
      </label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage name={field.name} render={msg => <div className="error text-input__error-message">{msg}</div>} />
    </div>
  );
};

export default TextInput;

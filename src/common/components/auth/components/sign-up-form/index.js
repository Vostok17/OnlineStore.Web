import React from 'react';
import { Button } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import TextField from '../text-field';
import './sign-up-form.css';

const SignUpForm = ({ onSubmit }) => {
  const validate = Yup.object({
    firstName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords do not match')
      .required('Please, confirm password'),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={onSubmit}
    >
      <div className="sign-up-form mb-3">
        <h1 className="my-4">Sign Up</h1>
        <Form>
          <TextField label="First Name" name="firstName" type="text" />
          <TextField label="Last Name" name="lastName" type="text" />
          <TextField label="Email" name="email" type="email" />
          <TextField label="Password" name="password" type="password" />
          <TextField label="Confirm Password" name="confirmPassword" type="password" />
          <div className="sign-up-form__buttons">
            <Button type="submit" variant="dark">
              Register
            </Button>
            <Button type="reset" variant="danger">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default SignUpForm;

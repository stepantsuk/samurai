import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

let initialValues = {
  email: '',
  password: '',
  rememberToggle: false,
};

let validationSchema = yup.object({
  email: yup.string().email('invalid email format').required('required'),
  password: yup.string().required('required')
});

let onSubmit = (values) => { 
  debugger
  console.log(values) };

let LoginFormik = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form>
        <div>
          <div>
            <label htmlFor='email' >
              login
            </label>
          </div>
          <Field
            id='email'
            type='email'
            name='email'
            placeholder='enter email'
          />
          <ErrorMessage
            name='email'
          />
        </div>
        <div>
          <div>
            <label htmlFor='password' >
              password
            </label>
          </div>
          <Field
            id='password'
            type='password'
            name='password'
            placeholder='enter password'
          />
          <ErrorMessage
            name='password'
          />
        </div>
        <div>
          <Field
            id='rememberToggle'
            type='checkbox'
            name='rememberToggle'
          />
          <span>
            <label htmlFor='rememberToggle' >
              remember me
            </label>
          </span>
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>)
}

export const LoginForm = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginFormik />
    </div>
  )
};

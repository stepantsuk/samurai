import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './LoginForm.module.css';

let initialValues = {
  email: '',
  password: '',
  rememberToggle: false,
};

let validationSchema = yup.object({
  email: yup.string().email('invalid email format').required('required'),
  password: yup.string().required('required')
});

let validate = (values) => {
  let errors = {};
  if (!values.email) { errors.email = 'required' }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { errors.email = 'invalid form' };
  if (!values.password) { errors.password = 'required' }
  else if (values.password.length <= 1) { errors.password = 'more than 1 symbol' };
  return errors;
}

let onSubmit = (values) => {
  debugger
  console.log(values)
};

let LoginFormik = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      //validate={validate}
      onSubmit={onSubmit}>
      <Form >
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
            className={s.error}
            component={'span'}>
          </ErrorMessage>
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
            className={s.error}
            component={'span'}
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


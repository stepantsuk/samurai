import React from "react";
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { FormControl } from '../FormControl/FormControl'

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
  console.log(values)
};

let LoginFormik = () => {
  return (
    <Formik
      initialValues={initialValues}
      //validationSchema={validationSchema}
      validate={validate}
      onSubmit={onSubmit}>
      {(formik) => {
      return (
        <div>
        <Form >
          <div>
            <FormControl
              control='input'
              type='email'
              label='Email'
              name='email' />
            <FormControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <FormControl
              control='checkbox'
              type='checkbox'
              label='Remember me'
              name='rememberToggle'
            />
          </div>
          <button type="submit">Login</button>
        </Form>
      </div>)}}
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


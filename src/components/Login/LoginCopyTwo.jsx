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

let onSubmit = (values) => {
  debugger
  console.log(values)
};

let LoginFormik = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {(formik) => {
        console.log(formik)
        return (
          <div>
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
                  className = {formik.errors.email && formik.touched.email && s.fieldEmail}
                >
                  
                </Field>
                <ErrorMessage name='email'>

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
                <div >
                  <ErrorMessage
                    name='password'
                    className={s.error}
                    component={'div'}
                  />
                </div>
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
          </div>
        )
      }}
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

let validate = (values) => {
  const errors = {};
  if (!values.email) { errors.email = 'required' }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) { errors.email = 'invalid form' };
  if (!values.password) { errors.password = 'required' }
  else if (values.password.length <= 2) { errors.password = 'more than 1 symbol' };
  return errors;
}

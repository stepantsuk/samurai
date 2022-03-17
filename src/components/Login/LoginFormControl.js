import React from "react";
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { FormControl } from '../FormControl/FormControl';
import { login } from './../../redux/authReducer';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

let LoginFormik = (props) => {

  let initialValues = {
    email: '',
    password: '',
    rememberMe: false,
    captcha: null,
  };

  //validationSchema не удаляй, это другой вариант валидации, сейчас использую validate
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
    //if (!values.captcha) { errors.captcha = 'required' };
    return errors;
  };

  let onSubmit = (values, onSubmitProps) => {
    console.log('onSubmitProps', onSubmitProps);
    console.log('values', values)
    props.login(values.email, values.password, values.rememberMe, values.captcha, onSubmitProps.setStatus, onSubmitProps.setSubmitting);
  };

  return (
    <Formik
      initialValues={initialValues}
      //validationSchema={validationSchema}
      validate={validate}
      onSubmit={onSubmit}>
      {(formik) => {
        console.log('formik', formik)
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
                  name='rememberMe'
                />
                {props.captchaUrl && <img src={props.captchaUrl} />}
                {props.captchaUrl && <FormControl
                  control='input'
                  type='text'
                  label='captcha'
                  name='captcha'
                />}
              </div>
              <button type="submit" disabled={formik.isSubmitting}>Login</button>
              {formik.status && <div>{formik.status}</div>}
            </Form>
          </div>)
      }}
    </Formik>)
}

const LoginForm = (props) => {
  console.log('LoginFormprops', props)

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginFormik login={props.login} captchaUrl={props.captchaUrl} />
    </div>
  )
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
})

export const LoginFormContainer = connect(mapStateToProps, { login })(LoginForm)


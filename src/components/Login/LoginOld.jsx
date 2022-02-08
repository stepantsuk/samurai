import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';


const LoginFormik = () => {
  const validationsSchema = yup.object({
    email: yup.string().email('invalid email format').required('required'),
    password: yup.string().required('required')
  })
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          toggle: false,
        }}
        validateOnBlur
        onSubmit={(values) => { console.log(values) }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => {
          return (
            <form>
              <div>
                <div>
                  <label htmlFor={'email'} >Email</label>
                </div>
                <input
                  type={'text'}
                  name={'email'}
                  placeholder={'login'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {touched.email && errors.email && <div>{errors.email}</div>}
              </div>
              <div>
                <div>
                  <label htmlFor={'password'} >Password</label>
                </div>
                <input
                  type={'password'}
                  name={'password'}
                  placeholder={'password'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {touched.password && errors.password && <div>{errors.password}</div>}
              </div>
              <div>
                <input
                  type={'checkbox'}
                  name={'toggle'}
                  onChange={handleChange} 
                  />{values.toggle? `i'll remember you` : `i'll not remember you`}
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  type={'submit'}
                >
                  login
                </button>
              </div>
            </form>
          )
        }
        }
      </Formik>
    </div>
  )
}

export const Login = (props) => {
  return (
    <form>
      <div>
        <input placeholder={'login'} />
      </div>
      <div>
        <input placeholder={'password'} />
      </div>
      <div>
        <input type={'checkbox'} />rememberMe
      </div>
      <div>
        <button>login</button>
      </div>
    </form>
  )
};

const LoginForm = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginFormik />
    </div>
  )
};



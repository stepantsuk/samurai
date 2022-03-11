import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import s from './LoginForm.module.css';

let LoginFormik = () => {
  return (
    <Formik>
      {formik => {
        console.log
      }
      }
    </Formik>
  )
}


export const LoginForm = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginFormik />
    </div>
  )
};
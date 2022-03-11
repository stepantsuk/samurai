import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField, useFormikContext } from "formik";
import style from './Style.module.css'

export let Input = (props) => {
  return (
    <div>
      <CustomInput {...props} />
    </div>
  )
}

const CustomInput = (props) => {
  const [field, meta] = useField(props.name);
  const error = meta.touched && meta.error;
  return (
    <div>
      <div>
        <label htmlFor={props.name}>{props.label}</label>
      </div>
      <div>
        <input id={props.name} className={error && style.inputError || style.inputDefault} {...field} {...props} />
      </div>
      {error ? <div className={error && style.error}>{meta.error}</div> : null}
    </div>
  );
};


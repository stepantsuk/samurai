import React from 'react'
import { useField } from 'formik'
import style from './Style.module.css'

export let Textarea = (props) => {
  return (
    <div>
      <CustomTextarea {...props} />
    </div>
  )
};

const CustomTextarea = (props) => {
  const [field, meta, { ...rest }] = useField(props.name);
  const error = meta.touched && meta.error;
  return (
    <div>
      <div>
        <label htmlFor={props.label}>{props.label}</label>
      </div>
      <div>
        <textarea {...field} {...meta} {...rest} className={error && style.inputError || style.inputDefault} />
      </div>
      {error ? <div className={style.error}>{meta.error}</div> : null}
    </div>
  );
};
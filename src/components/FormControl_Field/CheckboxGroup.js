import React from 'react'
import { useField } from 'formik'

export let CheckboxGroup = (props) => {
  return (
    <div>
      <CustomCheckbox {...props} />
    </div>
  )
}

const CustomCheckbox = (props) => {
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
    </div>
  );
};

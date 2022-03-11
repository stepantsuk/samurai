import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export let CheckboxGroup = (props) => {
  const { label, name, ...rest } = props
  console.log(props)
  return (
    <div className='form-control'>
      <Field id={name} name={name} {...rest} />
      <label htmlFor={name}>{label}</label>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
};

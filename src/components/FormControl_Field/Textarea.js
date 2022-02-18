import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

export let Textarea = (props) => {
  const { label, name, ...rest } = props
  return (
    <div className='form-control'>
      <div><label htmlFor={name}>{label}</label></div>
      <Field as='textarea' id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}
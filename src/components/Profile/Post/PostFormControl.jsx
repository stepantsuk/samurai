import React from 'react';
import postNew from './PostNew.module.css';
import { Formik, Field, Form, } from 'formik';
import { FormControl } from '../../FormControl/FormControl';

export const PostFormControl = (props) => {
  let initialValues = {
    post: '',
  };

  let onSubmit = (values, onSubmitProps) => {
    console.log(values)
    props.addBtn(values.post);
    onSubmitProps.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      className={postNew.container}
    >
      <Form >
        <FormControl
        control='textarea'
        name='post'
        label ='Post:'
         />
        <button type="submit" className={postNew.btn}>
          Send
        </button>
      </Form>
    </Formik>
  )
};
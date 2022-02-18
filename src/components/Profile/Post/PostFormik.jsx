import React from 'react';
import postNew from './PostNew.module.css';
import { Formik, Field, Form, } from 'formik';

export const PostFormik = (props) => {
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
        <Field
          type={'text'}
          name={'post'}
          className={postNew.text}
        />
        <button type="submit" className={postNew.btn}>
          Send
        </button>
      </Form>
    </Formik>
  )
};
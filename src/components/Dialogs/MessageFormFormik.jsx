import React from 'react';
import css from './Dialogs.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';

export const MessageFormFormik = (props) => {

  let initialValues = {
    message: '',
  };

  let onSubmit = (values, onSubmitProps) => {
    props.publishMsgText(values.message);
    onSubmitProps.resetForm();
  };

  // let publishMsgText = () => {
  //   props.publishMsgText()
  // };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form className={css.msgContainer}>
        <Field
          type={'text'}
          name={'message'}
          className={css.msgText}
        />
        <button type="submit" className={css.msgSendBtn}>
          SendMsg
        </button>
      </Form>
    </Formik>
  )
};
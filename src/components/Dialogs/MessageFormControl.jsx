import React from 'react';
import css from './Dialogs.module.css';
import { Formik, Form, } from 'formik';
import { FormControl } from '../FormControl/FormControl';

export const MessageFormControl = (props) => {

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
      {(formik) => {
        return (<div>
          <Form className={css.msgContainer}>
            <FormControl
              control='textarea'
              type='textarea'
              label='Message'
              name='message' />
            <button type="submit" className={css.msgSendBtn}>
              SendMsg
            </button>
          </Form>
        </div>
        )
      }}
    </Formik>
  )
};
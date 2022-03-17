import React from 'react';
import { Formik, Form } from 'formik';
import { FormControl } from '../../FormControl/FormControl';

export let ProfileEditForm = ({ profile, saveProfile, setEditMode }) => {

  let initialValues = {
    fullName: profile.fullName,
    aboutMe: profile.aboutMe,
    lookingForAJob: profile.lookingForAJob,
    lookingForAJobDescription: profile.lookingForAJobDescription,
    contacts: {
      github: profile.contacts.github,
      facebook: profile.contacts.facebook,
    },

    // contacts: {
    //   github: '',
    //   vk: '',
    //   facebook: '',
    //   instagram: '',
    //   twitter: '',
    //   website: '',
    //   youtube: '',
    //   mainLink: '',
    // },
  };

  let onSubmit = (values, onSubmitProps) => {
    console.log('onSubmitProps', onSubmitProps);
    console.log('values', values);
    saveProfile(values, onSubmitProps.setStatus, onSubmitProps.setSubmitting).then(
      () => {
        setEditMode(false)
      });
    //onSubmitProps.setSubmitting(true);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}>
      {(formik) => {
        console.log('formik', formik);
        return (
          <div>
            <Form >
              <div>
                <FormControl
                  control='input'
                  type='text'
                  label='Full name is :'
                  name='fullName' />
                <FormControl
                  control='checkbox'
                  type='checkbox'
                  label='looking for a job'
                  name='lookingForAJob'
                />
                <FormControl
                  control='textarea'
                  label='about me:'
                  name='aboutMe'
                />
                <FormControl
                  control='textarea'
                  label='my professional skills:'
                  name='lookingForAJobDescription'
                />
                <FormControl
                  control='input'
                  type='text'
                  label='git hub :'
                  name='contacts.github'
                />
                <FormControl
                  control='input'
                  type='text'
                  label='facebook :'
                  name='contacts.facebook'
                />
              </div>
              <button type="submit" disabled={formik.isSubmitting}>Save</button>
              {formik.status && <div>{formik.status}</div>}
            </Form>
          </div>)
      }}

    </Formik>
  )
}
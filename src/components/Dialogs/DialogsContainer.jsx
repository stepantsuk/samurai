import React from 'react';
import { createActionHandleTextMsg, createActionAddMsg } from '../../redux/dialogsPageReducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    publishMsgText: () => {
      dispatch(createActionAddMsg());
    },
    inputMsgText: (text) => {
      dispatch(createActionHandleTextMsg(text));
    },
  }
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

import React from 'react';
import { createActionHandleTextMsg, createActionAddMsg } from '../../redux/dialogsPageReducer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage,
    isAuth: state.auth.isAuth,
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

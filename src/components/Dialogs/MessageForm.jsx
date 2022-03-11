import React from 'react';
import css from './Dialogs.module.css';

export const MessageForm = (props) => {
  
  let newMsgRef = React.createRef();

  //let showMsgText = newMsgRef.current.value;

  let inputMsgText = () => {
    props.inputMsgText(newMsgRef.current.value)
  };

  let publishMsgText = () => {
    props.publishMsgText()
  };

  debugger;

  return (
    <div className={css.msgContainer}>
      <div>
        <textarea value={props.dialogsPage.newMessageText} ref={newMsgRef} onChange={inputMsgText} placeholder="Write msg" className={css.msgText}>
        </textarea>
      </div>
      <div>
        <button onClick={publishMsgText} className={css.msgSendBtn}>
          SendMsg
        </button>
      </div>
    </div>
  )
};
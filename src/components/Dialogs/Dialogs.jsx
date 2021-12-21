import React from 'react';
import css from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import { createActionHandleTextMsg, createActionAddMsg } from './../../redux/dialogsPageReducer'


const Dialogs = (props) => {
  const CompanionItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
      <div className={css.dialogsCompanionContainer}>
        <div className={css.dialogsCompanionAvatar}>
          <img className={css.dialogsCompanionAvatarImg}></img>
        </div>
        <NavLink to={path} className={css.dialogsCompanionItem} activeClassName={css.dialogsCompanionItemActive}>{props.nameCompanion}
        </NavLink>
      </div>
    )
  };

  let companionData = props.dialogsData.companionData;

  /*let companionData = [
    { id: 1, name: 'Petr' },
    { id: 2, name: 'Vasia' },
    { id: 3, name: 'Ivan' },
  ] */

  let dialogsElements = companionData.map(
    (dialog) => {
      return <CompanionItem nameCompanion={dialog.name} id={dialog.id} />
    }
  )

  let messageData = props.dialogsData.messageData;

  /*let messageData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'It is me' },
    { id: 3, message: 'Fine' },
  ]*/

  const CompanionMessage = (props) => {
    return (
      <div className={css.dialogsMsg}>
        {props.message}
      </div>
    )
  }

  let messagesElements = messageData.map(message => <CompanionMessage message={message.message} />)

  //тренировка по React.createRef()

  let newMsgRef = React.createRef();

  //let showMsgText = newMsgRef.current.value;

  let inputMsgText = () => {
    props.inputMsgText(newMsgRef.current.value)
  };

  let publishMsgText = () => {
    props.publishMsgText()
  };


  //тренировка по React.createRef() FINISH

  return (
    <div className={css.dialogsWrapper}>
      <div className={css.dialogsCompanionList}>
        {dialogsElements}
      </div>
      <div>
        {messagesElements}
        <div className={css.msgContainer}>
          <div>
            <textarea value={props.dialogsData.newMessageText} ref={newMsgRef} onChange={inputMsgText} placeholder="Write msg" className={css.msgText}>
            </textarea>
          </div>
          <div>
            <button onClick={publishMsgText} className={css.msgSendBtn}>
              SendMsg
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
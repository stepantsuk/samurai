export const dialogsPageReducer = (state, action) => {
  let _addMessage = () => {
    let messageBody = { id: 4, message: state.newMessageText } ;
    state.messageData.push(messageBody) ;
    state.newMessageText = '';
  };

  let _handleTextMessage = (messageValue) =>  {
    state.newMessageText= messageValue;
  };
  
  switch (action.type) {
    case 'ADD-MESSAGE':
      _addMessage();
      return state;
    case 'HANDLE-TEXT-MESSAGE':
      _handleTextMessage(action.messageText); 
      return state;
    default: return state;
  };

  /*
  if (action.type === 'ADD-MESSAGE') {
    _addMessage();
  } else if (action.type === 'HANDLE-TEXT-MESSAGE') {
    _handleTextMessage(action.messageText);
  };
  */
};

export const createActionAddMsg = () => {
  return {
    type: 'ADD-MESSAGE'
  }
};

export const createActionHandleTextMsg  = (text) => {
  return {
    type: 'HANDLE-TEXT-MESSAGE',
    messageText: text,
  }
};

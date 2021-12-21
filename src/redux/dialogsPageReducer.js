let initialState = {
  companionData: [
    { id: 1, name: 'Petr' },
    { id: 2, name: 'Vasia' },
    { id: 3, name: 'Ivan' },
  ],
  messageData: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'It is me' },
    { id: 3, message: 'Fine' },
  ],
  newMessageText: '',
};

export const dialogsPageReducer = (state = initialState, action) => {

  let stateCopy;

  let _addMessage = () => {
    let messageBody = { id: 4, message: state.newMessageText };
    stateCopy = {
      ...state,
      messageData: [...state.messageData, messageBody],
      newMessageText: '',
    };
  };

  let _handleTextMessage = (messageValue) => {
    stateCopy = {
      ...state,
      newMessageText: messageValue,
    };
  };

  switch (action.type) {
    case 'ADD-MESSAGE':
      _addMessage();
      return stateCopy;
    case 'HANDLE-TEXT-MESSAGE':
      _handleTextMessage(action.messageText);
      return stateCopy;
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

export const createActionHandleTextMsg = (text) => {
  return {
    type: 'HANDLE-TEXT-MESSAGE',
    messageText: text,
  }
};

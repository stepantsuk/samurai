let ADD_MESSAGE = 'samurai/dialogs/ADD_MESSAGE';
let HANDLE_TEXT_MESSAGE = 'samurai/dialogs/HANDLE_TEXT_MESSAGE';

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
  switch (action.type) {
    case ADD_MESSAGE: {
      let messageBody = { id: 4, message: action.text };
      state.messageData = [...state.messageData, messageBody];
      return { ...state };
    }
    case HANDLE_TEXT_MESSAGE: {
      return {
        ...state,
        newMessageText: action.messageText
      }
    }
    default: return state;
  };
};
export const createActionAddMsg = (text) => {
  return {
    type: ADD_MESSAGE,
    text: text,
  }
};


export const createActionHandleTextMsg = (text) => {
  return {
    type: HANDLE_TEXT_MESSAGE,
    messageText: text,
  }
};

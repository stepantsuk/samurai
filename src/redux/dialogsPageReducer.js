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
    case 'ADD-MESSAGE': {
      let messageBody = { id: 4, message: action.text };
      state.messageData = [...state.messageData, messageBody];
      return { ...state };
    }
    case 'HANDLE-TEXT-MESSAGE': {
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
    type: 'ADD-MESSAGE',
    text: text,
  }
};


export const createActionHandleTextMsg = (text) => {
  return {
    type: 'HANDLE-TEXT-MESSAGE',
    messageText: text,
  }
};

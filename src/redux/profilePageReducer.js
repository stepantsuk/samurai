export const profilePageReducer = (state, action) => {
  let _addPost = () => {
    let newPost = { id: 4, message: state.newPostText, likesCount: 99 };
    state.wallData.push(newPost);
    state.newPostText = '';
  };

  let _handleTextPost = (postText) => {
    state.newPostText = postText;
  };

  switch (action.type) {
    case 'ADD-POST':
      _addPost();
      return state;
    case 'HANDLE-TEXT-POST':
      _handleTextPost(action.postText);
      return state;
    default:
      return state;
  };
};

export const createActionAddPost = () => {
  return {
    type: 'ADD-POST'
  }
};

export const createActionHandleTextPost = (text) => {
  return {
    type: 'HANDLE-TEXT-POST',
    postText: text,
  }
};


/* if (action.type === 'ADD-POST') {
  _addPost();
} else if (action.type === 'HANDLE-TEXT-POST') {
  _handleTextPost(action.postText);
};

return state;
};*/
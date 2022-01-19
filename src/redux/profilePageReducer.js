const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  wallData: [
    { id: 1, message: 'Hi how are you ?', likesCount: 12 },
    { id: 2, message: 'What are you doing ?', likesCount: 7 },
    { id: 3, message: 'All is good', likesCount: 5 },
  ],
  newPostText: '',
  profile: null,
};

export const profilePageReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_POST:{ 
      let newPost = { id: 4, message: state.newPostText, likesCount: 99 }
      return {
        ...state,
        wallData: [...state.wallData, newPost],
        newPostText: '',
      } 
    }
    case UPDATE_NEW_POST_TEXT:{
      return {
        ...state,
        newPostText: action.newText,
      } 
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    default:
      return state;
  };
};

export const createActionAddPost = () => {
  return {
    type: ADD_POST
  }
};

export const createActionHandleTextPost = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
};

export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile});


/* if (action.type === 'ADD-POST') {
  _addPost();
} else if (action.type === 'HANDLE-TEXT-POST') {
  _handleTextPost(action.postText);
};

return state;
};*/
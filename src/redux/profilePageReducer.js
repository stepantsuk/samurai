import { userAPI, profileAPI } from './../api/api';

let ADD_POST = "ADD_POST";
let HANDLE_TEXT_POST = "HANDLE_TEXT_POST";
let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_USER_STATUS_PROFILE = "SET_USER_STATUS_PROFILE";

let initialState = {
  wallData: [
    { id: 1, message: 'Hi how are you ?', likesCount: 12 },
    { id: 2, message: 'What are you doing ?', likesCount: 7 },
    { id: 3, message: 'All is good', likesCount: 5 },
  ],
  newPostText: '',
  profile: null,
  status: 'hi',
};

export const profilePageReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = { id: 4, message: state.newPostText, likesCount: 99 };
      state.wallData = [...state.wallData, newPost];
      state.newPostText = '';
      return { ...state };
    }
    // _addPost();
    // return stateCopy;
    case HANDLE_TEXT_POST: {
      return {
        ...state,
        newPostText: action.newPostText
      }
    }
    // _handleTextPost(action.postText);
    // return stateCopy;
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile, }
    }
    case SET_USER_STATUS_PROFILE: {
      return { ...state, status: action.status, }
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

export const createActionHandleTextPost = (newPostText) => {
  return {
    type: HANDLE_TEXT_POST,
    newPostText: newPostText,
  }
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  }
};

export const setUserProfileStatus = (status) => {
  return {
    type: SET_USER_STATUS_PROFILE,
    status: status,
  }
}

export const getUserProfile = (userId) => {
  return (dispatch) => {
    userAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    })
  }
};

export const getUserProfileStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfileStatus(userId).then(response => {
      dispatch(setUserProfileStatus(response.data));
    })
  }
};

export const updateUserProfileStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserProfileStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserProfileStatus(status))
      };
    })
  }
};


/* if (action.type === 'ADD-POST') {
  _addPost();
} else if (action.type === 'HANDLE-TEXT-POST') {
  _handleTextPost(action.postText);
};

return state;
};*/
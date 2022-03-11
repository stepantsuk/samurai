//import { userAPI, profileAPI } from './../api/api';

let ADD_POST = "ADD_POST";
let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_USER_STATUS_PROFILE = "SET_USER_STATUS_PROFILE";

let initialState = {
  wallData: [
    { id: 1, message: 'Hi how are you ?', likesCount: 12 },
    { id: 2, message: 'What are you doing ?', likesCount: 7 },
    { id: 3, message: 'All is good', likesCount: 5 },
  ],
  profile: null,
  status: 'hi',
};

const profilePageReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = { id: 4, message: action.newPostText, likesCount: 99 };
      state.wallData = [...state.wallData, newPost];
      return { ...state };
    }
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

export const createActionAddPost = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText: newPostText,
  }
};

const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  }
};

const setUserProfileStatus = (status) => {
  return {
    type: SET_USER_STATUS_PROFILE,
    status: status,
  }
}

const getUserProfile = (userId) => {
  return (dispatch) => {
    userAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    })
  }
};

const getUserProfileStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserProfileStatus(userId).then(response => {
      dispatch(setUserProfileStatus(response.data));
    })
  }
};

const updateUserProfileStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserProfileStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserProfileStatus(status))
      };
    })
  }
};


module.exports = profilePageReducer;
import { userAPI, profileAPI } from './../api/api';

let ADD_POST = "samurai/profile/ADD_POST";
let SET_USER_PROFILE = "samurai/profile/SET_USER_PROFILE";
let SET_USER_STATUS_PROFILE = "samurai/profile/SET_USER_STATUS_PROFILE";
let SAVE_PHOTO_SUCCESS = "samurai/profile/SAVE_PHOTO_SUCCESS";

let initialState = {
  wallData: [
    { id: 1, message: 'Hi how are you ?', likesCount: 12 },
    { id: 2, message: 'What are you doing ?', likesCount: 7 },
    { id: 3, message: 'All is good', likesCount: 5 },
  ],
  profile: null,
  status: '',
};

export const profilePageReducer = (state = initialState, action) => {

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
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } }
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

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  }
};

export const savePhotoAC = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos: photos,
  }
}

export const setUserProfileStatus = (status) => {
  return {
    type: SET_USER_STATUS_PROFILE,
    status: status,
  }
}

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await userAPI.getProfile(userId);
  dispatch(setUserProfile(response.data))
};

export const getUserProfileStatus = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getUserProfileStatus(userId);
    dispatch(setUserProfileStatus(response.data));
  }
};

export const updateUserProfileStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateUserProfileStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserProfileStatus(status))
  };
};

export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoAC(response.data.data.photos))
  };
};

export const saveProfile = (profile, setStatus, setSubmitting) => async (dispatch, getState) => {
  setSubmitting(true);
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  setSubmitting(false);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    setStatus(response.data.messages);
    return Promise.reject();
  };
};

//export const saveProfile = (profile) => {profileAPI.saveProfile(profile)};

// export const saveProfile = (profile) => {
//   return (dispatch) => {
//     authAPI.saveProfile(profile).then(response => {
//       if (response.data.resultCode === 0) {
//         dispatch(getAuthUserData())
//       } else { setStatus(response.data.messages) };
//       setSubmitting(false);
//     });

//   }
// };



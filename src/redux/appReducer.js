import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'samurai/app/INITIALIZED_SUCCESS';

let initialState = {
  initialized: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }

    default:
      return state;
  }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  //dispatch(somethingelse());Promise.all([promise]) это для того, чтобы объединить неколько промисов promise2, promise3
  //dispatch(somethingelse()); 
  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess());
    });
}

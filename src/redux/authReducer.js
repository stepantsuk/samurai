import { authAPI } from './../api/api';

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
};

export const getAuthUserData = () => {
  return (dispatch) => {
    authAPI.me().then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      };
    })
  }
};

export let setAuthUserData = (userId, email, login, isAuth) => {
  return ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
};

export const login = (email, password, rememberMe, setStatus, setSubmitting) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else { setStatus(response.data.messages) };
      setSubmitting(false);
    });
    
  }
};

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false,))
      };
    })
  }
};

/* верни в users все ниже для локально стейта если что
{ id: 1, photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgkUANhU439c2rqDbXSLDCivKS4yP52_STw&usqp=CAU', followed: true, firstName: 'Ivan', lastName: 'Ivanov', status: 'i am student', location: { city: 'Moscow', country: 'Russia' }, },
    { id: 2, photoURL:'https://habrastorage.org/storage2/93b/46f/a39/93b46fa39dd9f2c7a545ffbf571bd10d.jpg', followed: false, firstName: 'Petr', lastName: 'Petrov', status: 'i am musicant', location: { city: 'Voronezh', country: 'Russia' }, },
    { id: 3, photoURL:'https://cs-site.ru/uploads/posts/2020-09/1599772043_596.jpg', followed: true, firstName: 'Sidor', lastName: 'Sidorov', status: 'i am blogger', location: { city: 'Riga', country: 'Latvia' }, },
*/
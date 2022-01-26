import { applyMiddleware, combineReducers, createStore } from "redux";
import { profilePageReducer } from './profilePageReducer';
import { dialogsPageReducer } from './dialogsPageReducer';
import { sideBarFriendsReducer } from './sideBarFriendsReducer';
import { usersReducer } from './usersReducer';
import { authReducer } from './authReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBarFriends: sideBarFriendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

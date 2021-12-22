import { combineReducers, createStore } from "redux";
import { profilePageReducer } from './profilePageReducer';
import { dialogsPageReducer } from './dialogsPageReducer';
import { sideBarFriendsReducer } from './sideBarFriendsReducer';
import { usersReducer } from './usersReducer'

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBarFriends: sideBarFriendsReducer,
  usersPage: usersReducer,
});

export let store = createStore(reducers);

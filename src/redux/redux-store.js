import { combineReducers, createStore } from "redux";
import { profilePageReducer } from './profilePageReducer';
import { dialogsPageReducer } from './dialogsPageReducer';
import { sideBarFriendsReducer } from './sideBarFriendsReducer';


let reducers = combineReducers ({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  sideBarFriends: sideBarFriendsReducer,
});

export let store = createStore(reducers);

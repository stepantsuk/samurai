import { dialogsPageReducer } from "./dialogsPageReducer";
import { profilePageReducer } from "./profilePageReducer";
import { sideBarFriendsReducer } from "./sideBarFriendsReducer";

/*
let companionData = [
  { id: 1, name: 'Petr' },
  { id: 2, name: 'Vasia' },
  { id: 3, name: 'Ivan' },
];

let messageData = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'It is me' },
  { id: 3, message: 'Fine' },
];

let wallData = [
  { id: 1, message: 'Hi how are you ?', likesCount: 12 },
  { id: 2, message: 'What are you doing ?', likesCount: 7 },
  { id: 3, message: 'All is good', likesCount: 5 },
]
*/


export let store = {
  _state: {
    dialogsPage: {
      companionData: [
        { id: 1, name: 'Petr' },
        { id: 2, name: 'Vasia' },
        { id: 3, name: 'Ivan' },
      ],
      messageData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'It is me' },
        { id: 3, message: 'Fine' },
      ],
      newMessageText: '',
    },
    profilePage: {
      wallData: [
        { id: 1, message: 'Hi how are you ?', likesCount: 12 },
        { id: 2, message: 'What are you doing ?', likesCount: 7 },
        { id: 3, message: 'All is good', likesCount: 5 },
      ],
      newPostText: '',
    },
    sideBarFriends: {
      friendsData: [
        { id: 1, name: 'Ivan' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Nastia' },
      ],
    },
  },

  _rerenderEntireTree() { },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },

  /*
    _addPost() {
    let newPost = { id: 4, message: this._state.profilePage.newPostText, likesCount: 99 };
    this._state.profilePage.wallData.push(newPost);
    this._rerenderEntireTree();
    this._state.profilePage.newPostText = '';
  },

  _handleTextPost(postText) {
    this._state.profilePage.newPostText = postText;
    this._rerenderEntireTree();
  },

  _addMessage() {
    let messageBody = { id: 4, message: this._state.dialogsPage.newMessageText } ;
    this._state.dialogsPage.messageData.push(messageBody) ;
    this._rerenderEntireTree();
    this._state.dialogsPage.newMessageText = '';
  },

  _handleTextMessage(messageValue) {
    this._state.dialogsPage.newMessageText= messageValue;
    this._rerenderEntireTree();
  },

  dispatch (action) {
    if (action.type === 'ADD-POST') {
      this._addPost();
    } else if (action.type === 'HANDLE-TEXT-POST') {
      this._handleTextPost(action.postText);
    } else if (action.type === 'ADD-MESSAGE') {
      this._addMessage();
    } else if (action.type === 'HANDLE-TEXT-MESSAGE') {
      this._handleTextMessage(action.messageText);
    }
  },

  */

  dispatch (action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
    this._state.sidebar = sideBarFriendsReducer(this._state.sideBarFriends, action);

    this._rerenderEntireTree();
  },

  getState() {
    return this._state;
  },
}


/* export const state = {
  dialogsPage: {
    companionData: [
      { id: 1, name: 'Petr' },
      { id: 2, name: 'Vasia' },
      { id: 3, name: 'Ivan' },
    ],
    messageData: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'It is me' },
      { id: 3, message: 'Fine' },
    ],
  },
  profilePage: {
    wallData: [
      { id: 1, message: 'Hi how are you ?', likesCount: 12 },
      { id: 2, message: 'What are you doing ?', likesCount: 7 },
      { id: 3, message: 'All is good', likesCount: 5 },
    ],
    newPostText: '',
  },
  sideBarFriends: {
    friendsData: [
      { id: 1, name: 'Ivan' },
      { id: 2, name: 'Alex' },
      { id: 3, name: 'Nastia' },
    ],
  }
};

export const addPost = () => {
  state.profilePage.wallData.push({ id: 4, message: state.profilePage.newPostText, likesCount: 99 })
  rerenderEntireTree(state);
  state.profilePage.newPostText = '';
};

export const handleTextPost = (postText) => {
  state.profilePage.newPostText = postText;
  console.log(state.profilePage.newPostText);
  //debugger;
  rerenderEntireTree(state);
};

export const renew = (observer) => {
  rerenderEntireTree = observer;
};

*/

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

let rerenderEntireTree= () => {

}

export const state = {
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
  rerenderEntireTree= observer;
};



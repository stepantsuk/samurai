import { profilePageReducer, createActionAddPost } from './../redux/profilePageReducer'

// let profilePageReducer = require ('./../redux/profilePageReducer')
// let createActionAddPost = require('./../redux/profilePageReducer')

let state = {
  wallData: [
    { id: 1, message: 'Hi how are you ?', likesCount: 12 },
    { id: 2, message: 'What are you doing ?', likesCount: 7 },
    { id: 3, message: 'All is good', likesCount: 5 },
  ],
};

it('new post has been added', () => {

  let action = createActionAddPost('hi');

  let newState = profilePageReducer(state, action);

  expect(newState.wallData.length).toBe(4);
});

it('correct message', () => {

  let action = createActionAddPost('hi');

  let newState = profilePageReducer(state, action);

  expect(newState.wallData[3].message).toBe('hi');
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/State';

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
//учусь пользваоться гитом

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

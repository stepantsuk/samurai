import React from 'react';
import postNew from './PostNew.module.css';
import { createActionAddPost, createActionHandleTextPost } from './../../../redux/profilePageReducer'

const PostNew = (props) => {

  let newPostElement = React.createRef();

  let onAddBtn = () => {
    props.addBtn();
  };
  
  let onTextPost = () => {
    props.textPost(newPostElement.current.value)
  };


//props.handleTextPost(newPostElement.current.value);

return (
  <div className={postNew.container}>
    <div>
      <textarea value={props.newPostText} onChange={onTextPost} ref={newPostElement} placeholder="Write smth" className={postNew.text}>
      </textarea>
    </div>
    <div>
      <button onClick={onAddBtn} className={postNew.btn}>
        Send
      </button>
    </div>
  </div>
)}


export default PostNew
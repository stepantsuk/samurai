import React from 'react';
import postNew from './PostNew.module.css';

const PostNew = (props) => {

  let newPostElement = React.createRef();
  

  let onAddBtn = () => {
    props.addPost();
    props.handleTextPost('');
  };

  let textPost = () => {
    props.handleTextPost(newPostElement.current.value);
  }
  
  return (
    <div className={postNew.container}>
      <div>
        <textarea value={props.newPostText} onChange={textPost} ref={newPostElement} placeholder="Write smth" className={postNew.text}>
        </textarea>
      </div>
      <div>
        <button onClick={onAddBtn} className={postNew.btn}>
          Send
        </button>
      </div>
    </div>
  )
}

export default PostNew
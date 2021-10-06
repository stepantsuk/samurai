import React from 'react';
import postNew from './PostNew.module.css';


const PostNew = () => {
  return (
      <div className={postNew.container}>
        <textarea placeholder="Write smth" className={postNew.text}>
        </textarea>
        <button className={postNew.btn}>
          Send
        </button>
      </div>
  )
}

export default PostNew
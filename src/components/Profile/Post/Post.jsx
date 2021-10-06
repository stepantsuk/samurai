import React from 'react';
import post from './Post.module.css';
import PostNew from './PostNew';
import Wall from './Wall';

const Post = () => {
  return (
    <div className={post.container}>
      <h1 className={post.title}>
        MyPosts
      </h1>
      <PostNew />
      <Wall message='Hi how are you ?'/>
      <Wall message='What are you doing ?'/>
      <Wall message='Suck Elmans sweet'/>
    </div>
  )
}

export default Post
import React from 'react';
import post from './Post.module.css';
import PostNew from './PostNew';
import Wall from './Wall';
//import { wallData } from './wallData'

// let wallData = [
//   {id: 1, message:'Hi how are you ?', likesCount: 12},
//   {id: 2, message:'What are you doing ?', likesCount: 7},
//   {id: 3, message:'All is good', likesCount: 5},
// ]


const Post = (props) => {
  let wallElement =
    props.posts.map(
      (post) => {
        return <Wall message={post.message} likesCount={post.likesCount} />
      }
    )
  console.log(wallElement);
  return (
    <div className={post.container}>
      <h3 className={post.title}>
        MyPosts
      </h3>
      <PostNew addPost={props.addPost} handleTextPost={props.handleTextPost} newPostText={props.newPostText}/>
      {wallElement}
    </div>
  )
}

export default Post
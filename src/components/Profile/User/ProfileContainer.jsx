import React from 'react';
import ProfilePict from './ProfilePict'
import User from './User';
import Post from '../Post/Post'
import css from './Profile.module.css';
import Profile from './Profile';
import { createActionAddPost, createActionHandleTextPost } from './../../../redux/profilePageReducer'
// import { wallData } from './../Post/wallData'

let state = {}

export const ProfileContainer = (props) => {
  
  let addBtn = () => {
    props.dispatch(createActionAddPost());
    //props.handleTextPost('');
  };

  let textPost = (text) => {
    props.dispatch(createActionHandleTextPost(text));
  };

  let profileState = props.profilePage;

  return (
    <Profile addBtn={addBtn} textPost={textPost} profileState={profileState}/>
  )
  
  //return (
  //  <main className={css.wrapper}>
  //    <ProfilePict />
  //    <User />
  //    <Post posts= {props.postsData.wallData} dispatch={props.dispatch} newPostText={props.postsData.newPostText}/*posts={ wallData }*//>
  //  </main>
  //)
};


import React from 'react';
import ProfilePict from './ProfilePict'
import User from './User';
import Post from '../Post/Post'
import css from './Profile.module.css';
// import { wallData } from './../Post/wallData'

const Profile = (props) => {
  return (
    <main className={css.wrapper}>
      <ProfilePict />
      <User profile= {props.profileState.profile}/>
      <Post posts= {props.profileState.wallData} addBtn={props.createActionAddPost} textPost={props.createActionHandleTextPost} newPostText={props.profileState.newPostText}/*posts={ wallData }*//>
    </main>
  )
}

export default Profile;
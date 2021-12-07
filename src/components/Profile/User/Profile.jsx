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
      <User />
      <Post posts= {props.postsData.wallData} dispatch={props.dispatch} newPostText={props.postsData.newPostText}/*posts={ wallData }*//>
    </main>
  )
}

export default Profile;
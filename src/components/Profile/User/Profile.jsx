import React from 'react';
import ProfilePict from './ProfilePict'
import ProfileInfo from './ProfileInfo';
import Post from '../Post/Post'
import css from './Profile.module.css';
// import { wallData } from './../Post/wallData'

const Profile = (props) => {
  return (
    <main className={css.wrapper}>
      {/* <ProfilePict /> */}
      <ProfileInfo profile= {props.profileState.profile}/>
      <Post posts= {props.profileState.wallData} addBtn={props.createActionAddPost} textPost={props.createActionHandleTextPost} newPostText={props.profileState.newPostText}/*posts={ wallData }*//>
    </main>
  )
}

export default Profile;
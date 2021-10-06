import React from 'react';
import ProfilePict from './ProfilePict'
import User from './User/User';
import Post from './Post/Post'
import profile from './Profile.module.css';

const Profile = () => {
  return (
    <main>
      <ProfilePict />
      <User />
      <Post />
    </main>
  )
}

export default Profile;
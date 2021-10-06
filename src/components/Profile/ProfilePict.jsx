import React from 'react';
import profilePict from './ProfilePict.module.css';


const ProfilePict = () => {
  return (
    <div>
      <img className={profilePict.contentImg} src='https://phonoteka.org/uploads/posts/2021-06/1624911007_8-phonoteka_org-p-obezyana-oboi-krasivo-8.jpg'></img>
    </div>
  )
}

export default ProfilePict;
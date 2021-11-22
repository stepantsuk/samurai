import React from 'react';
import profilePict from './ProfilePict.module.css';


const ProfilePict = () => {
  return (
    <div>
      <img className={profilePict.contentImg} src='https://www.anypics.ru/download.php?file=201301/1024x768/anypics.ru-58435.jpg'></img>
    </div>
  )
}

export default ProfilePict;
import React from 'react';
import wall from './Wall.module.css';

const Wall = (props) => {
  return (
    <div className={wall.postContainer}>
      <div className={wall.postAvatar}>
        <img src='https://b.radikal.ru/b28/1809/9f/ed08ae1127aa.jpg' className={wall.postAvatarImg}>
        </img>
      </div>
      <div className={wall.postText}>
        {props.message}
      </div>
    </div>
  )
}

export default Wall
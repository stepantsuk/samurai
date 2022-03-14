import React from 'react';
import wall from './Wall.module.css';
import ava from './../../../img/shreder.png';

const Wall = (props) => {
  return (
    <div className={wall.postContainer}>
      <div className={wall.postAvatar}>
        <img src={ava} className={wall.postAvatarImg}>
        </img>
      </div>
      <div className={wall.postText}>
        {props.message}
      </div>
      <div className={wall.likesCount}>
        likes:{props.likesCount}
      </div>
    </div>
  )
}

export default Wall
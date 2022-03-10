import React from 'react';
import wall from './Wall.module.css';

const Wall = (props) => {
  return (
    <div className={wall.postContainer}>
      <div className={wall.postAvatar}>
        <img src='http://pscd.ru/uploads/posts/2015-01/1420715573_shreder.png' className={wall.postAvatarImg}>
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
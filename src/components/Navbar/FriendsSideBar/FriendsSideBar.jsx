import React from "react";
import css from "./FriendsSideBar.module.css";

export const FriendsSideBarItem = (props) => {
  return (
    <div className={css.itemFriendsWrapper}>
      {props.sideBarFriendsData.friendsData.map(f => {
        return (
          <div key={f.id} className={css.avatarFriends}>
            <img className={css.avatarFriendsImg}>
            </img>
            {f.name}
          </div>
        )
      })}

    </div>
  )
} 
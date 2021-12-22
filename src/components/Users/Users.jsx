import React from "react";
import styles from "./Users.module.css"

export let Users = (props) => {
  return <div>
    {props.usersState.users.map(u => {
      return (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoURL} className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? <button onClick={()=>{props.unfollow(u.id)}}>unfollow</button> : <button onClick={()=>{props.follow(u.id)}}>follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>
                {u.firstName} {u.lastName}
              </div>
              <div>
                {u.status}
              </div>
            </span>
            <span>
              <div>
                {u.location.city}
              </div>
              <div>
                {u.location.country}
              </div>
            </span>
          </span>
        </div>)
    })}
  </div>
};

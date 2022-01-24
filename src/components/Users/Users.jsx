import React from "react";
import styles from "./Users.module.css";
import ava from './../../img/ava.jpg';
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import {unFollowUser , followUser} from "./../../api/api";

export let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= 5; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(p => {
        return <div onClick={(e) => { props.onPageChanged(p) }} className={props.currentPage === p && styles.selectedPage}>{p}</div>
      })}
    </div>
    {props.users.map(u => {
      return (
        <div key={u.id}>
          <span>
            <NavLink to={'/profile/' + u.id}>
              <div>
                <img src={u.photos.small != null ? u.photos.small : ava} className={styles.userPhoto} />
              </div>
            </NavLink>
            <div>
              {u.name}
            </div>
            <div>
              {u.followed ?
                <button onClick={ ()=> {
                  return unFollowUser(u.id)
                }
                }>unfollow</button> :
                <button onClick={() => {
                  return followUser(u.id)
                }}>follow</button>
              }
            </div>
          </span>
        </div>)
    })}
  </div>
};


/*
export let Users = (props) => {
  let setUsers = () => {
    if (props.usersState.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      props.setUsers(response.data.items);
      });
    };
  };
  return <div>
    <button onClick={setUsers}>setUsers</button>
    {props.usersState.users.map(u => {
      return (
        <div key={u.id}>
          {u.name}
        </div>)
    })}
  </div>
};

/* <span>
            <div>
              <img className={styles.userPhoto} />
            </div>
            <div>
              {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button> : <button onClick={() => { props.follow(u.id) }}>follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>
                {u.name}
              </div>
              <div>
                {u.status}
              </div>
            </span>
            <span>
              <div>
              </div>
              <div>
              </div>
            </span>
          </span> */


/*
axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    props.setUsers(response.data.items);
    });

    [
      { id: 1, photoURL:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNgkUANhU439c2rqDbXSLDCivKS4yP52_STw&usqp=CAU', followed: true, name: 'Ivan', lastName: 'Ivanov', status: 'i am student', location: { city: 'Moscow', country: 'Russia' }, },
      { id: 2, photoURL:'https://habrastorage.org/storage2/93b/46f/a39/93b46fa39dd9f2c7a545ffbf571bd10d.jpg', followed: false, name: 'Petr', lastName: 'Petrov', status: 'i am musicant', location: { city: 'Voronezh', country: 'Russia' }, },
      { id: 3, photoURL:'https://cs-site.ru/uploads/posts/2020-09/1599772043_596.jpg', followed: true, name: 'Sidor', lastName: 'Sidorov', status: 'i am blogger', location: { city: 'Riga', country: 'Latvia' }, },
    ]



    */
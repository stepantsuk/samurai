import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';
import { FriendsSideBarContainer } from './FriendsSideBar/FriendsSideBarContainer';

const Navbar = (props) => {
  

  // let friendsElements = props.friendsData.friendsData.map(friend => <FriendsSideBarItem name={friend.name} />)

  return (
    <nav className={css.nav}>
      <div>
        <NavLink to="/profile" className={css.link} activeClassName={css.activeLink
        }>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" className={css.link} activeClassName={css.activeLink
        }>
          Users
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={css.link} activeClassName={css.activeLink
        }>
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink to="/news" className={css.link} activeClassName={css.activeLink
        }>
          News
        </NavLink>
      </div>
      <div>
        <NavLink to="/music" className={css.link} activeClassName={css.activeLink
        }>
          Music
        </NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={css.link} activeClassName={css.activeLink
        }>
          Settings
        </NavLink>
      </div>
      <div className={css.linkFriendsWrapper}>
        <NavLink to="/friends" className={css.link + ' ' + css.linkFriends} activeClassName={css.activeLink
        }>
          Friends
        </NavLink>
        <div className={css.friendsWrapper}>
          <FriendsSideBarContainer />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
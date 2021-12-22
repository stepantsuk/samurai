import React from "react";
import { connect } from "react-redux";
import {FriendsSideBarItem} from './FriendsSideBar'

const mapStateToProps = (state) => {
  return {
    sideBarFriendsData: state.sideBarFriends,
  }
};

const mapDispatchToProps = () => {
  return {

  }
};

export const FriendsSideBarContainer = connect(mapStateToProps,mapDispatchToProps)(FriendsSideBarItem);
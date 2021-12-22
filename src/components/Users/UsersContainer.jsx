import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import { Users } from "./Users";

const mapStateToProps = (state) => {
  return {
    usersState: state.usersPage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
  }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
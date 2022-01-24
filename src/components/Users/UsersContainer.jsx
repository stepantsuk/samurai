import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducer";
import { Users } from "./Users";
import { Preloader } from './../Common/Preloader';
import {userAPI} from './../../api/api';
//import preloader from './../../img/preloader.gif';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    
    userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  };

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  //{this.props.isFetching ? <img src="preloader"/> : null }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow} />
    </>
  };
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
};

/*
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    },
  }
};
*/

export default connect(mapStateToProps, {follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);
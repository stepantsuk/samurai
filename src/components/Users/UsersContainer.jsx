import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { follow, requestUsers, setCurrentPage, toggleFollowingProgress, unfollow } from "../../redux/usersReducer";
import { userAPI } from './../../api/api';
import { Preloader } from './../Common/Preloader';
import { Users } from "./Users";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowersInProgress}  from './../../redux/users-selectors'
//import preloader from './../../img/preloader.gif';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };

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
        unfollow={this.props.unfollow}
        followersInProgress={this.props.followersInProgress} />
    </>
  };
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followersInProgress: getFollowersInProgress(state),
  }
};



export default withAuthRedirect(connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers })(UsersContainer));

compose (withAuthRedirect,connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}))(UsersContainer);


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

/*
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followersInProgress: state.usersPage.followersInProgress
  }
};
*/
import React from "react";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/usersReducer";
import { Users } from "./Users";
import * as axios from "axios";

export class UsersContainer extends React.Component {
  componentDidMount = () => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  };

  render = () => {
    return <Users
        users = {this.props.users}
        pageSize = {this.props.pageSize}
        totalUsersCount = {this.props.totalUsersCount}
        currentPage = {this.props.currentPage}
        onPageChanged = {this.props.onPageChanged}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow} />
  };
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (count) => {
      dispatch(setTotalUsersCountAC(count))
    },
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
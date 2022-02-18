import React from 'react';
import Profile from './Profile';
import { createActionAddPost, getUserProfile, getUserProfileStatus, updateUserProfileStatus } from './../../../redux/profilePageReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from './../../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 21455;
    };
    this.props.getUserProfile(userId);
    this.props.getUserProfileStatus(userId);
  };

  render() {
    return (
      <Profile {...this.props} />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    profileState: state.profilePage,
    isAuth: state.auth.isAuth,
  }
};

export default compose(connect(mapStateToProps, { createActionAddPost, getUserProfile, getUserProfileStatus, updateUserProfileStatus }),withRouter,withAuthRedirect)(ProfileContainer);
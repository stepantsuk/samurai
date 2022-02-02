import React from 'react';
import Profile from './Profile';
import { createActionAddPost, createActionHandleTextPost, getUserProfile, getUserProfileStatus, updateUserProfileStatus } from './../../../redux/profilePageReducer'
import { connect } from 'react-redux';
import * as axios from "axios";
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from './../../../hoc/withAuthRedirect';
import { userAPI } from './../../../api/api';
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
      <Profile {...this.props} /*updateUserProfileStatus = {this.props.updateUserProfileStatus}*//>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    profileState: state.profilePage,
    isAuth: state.auth.isAuth,
  }
};

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { createActionAddPost, createActionHandleTextPost, getUserProfile })(WithUrlDataContainerComponent);

export default compose(connect(mapStateToProps, { createActionAddPost, createActionHandleTextPost, getUserProfile, getUserProfileStatus, updateUserProfileStatus }),withRouter,withAuthRedirect)(ProfileContainer);
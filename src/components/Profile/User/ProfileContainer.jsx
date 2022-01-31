import React from 'react';
import Profile from './Profile';
import { createActionAddPost, createActionHandleTextPost, getUserProfile } from './../../../redux/profilePageReducer'
import { connect } from 'react-redux';
import * as axios from "axios";
import { withRouter, Redirect } from 'react-router-dom';
import { userAPI } from './../../../api/api';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    };
    this.props.getUserProfile(userId);
  };

  render() {

    if (!this.props.isAuth) return <Redirect to={'/login'} />;


    return (
      <Profile {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profileState: state.profilePage,
    isAuth: state.auth.isAuth,
  }
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { createActionAddPost, createActionHandleTextPost, getUserProfile })(WithUrlDataContainerComponent);


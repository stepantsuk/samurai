import React from 'react';
import Profile from './Profile';
import { createActionAddPost, getUserProfile, getUserProfileStatus, updateUserProfileStatus } from './../../../redux/profilePageReducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import {withAuthRedirect} from './../../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
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
    authorizedUserId: state.auth.userId,
  }
};

export default compose(
  connect(mapStateToProps, { createActionAddPost, getUserProfile, getUserProfileStatus, updateUserProfileStatus }), withRouter
)(ProfileContainer);

  // здесь зачем то мы удалил withAuthRedirect из конейнера выше (он был после withRouter) и вставили то , что на 14й строчке кода метод this.props.history.push("/login");
import React from 'react';
import Profile from './Profile';
import { createActionAddPost, createActionHandleTextPost, setProfile } from './../../../redux/profilePageReducer'
import { connect } from 'react-redux';
import * as axios from "axios";
import { withRouter } from 'react-router-dom';
import {userAPI} from './../../../api/api';
// import { wallData } from './../Post/wallData'


// export const ProfileContainer = (props) => {

//   let addBtn = () => {
//     props.dispatch(createActionAddPost());
//     //props.handleTextPost('');
//   };

//   let textPost = (text) => {
//     props.dispatch(createActionHandleTextPost(text));
//   };

//   let profileState = props.profilePage;

//   return (
//     <Profile addBtn={addBtn} textPost={textPost} profileState={profileState}/>
//   )

//   //return (
//   //  <main className={css.wrapper}>
//   //    <ProfilePict />
//   //    <User />
//   //    <Post posts= {props.postsData.wallData} dispatch={props.dispatch} newPostText={props.postsData.newPostText}/*posts={ wallData }*//>
//   //  </main>
//   //)
// };

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId =2;
    };
    this.props.setProfile(userId);
  };

  render() {
    return (
      <Profile {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profileState: state.profilePage,
  }
};

let WithUrlDataContainerComponent= withRouter(ProfileContainer);

export default connect(mapStateToProps, { createActionAddPost, createActionHandleTextPost, setProfile })(WithUrlDataContainerComponent);


// const mapDispatchToProps = (dispatch) => {
//   return {
//     addBtn: () => {
//       dispatch(createActionAddPost());
//     },
//     textPost: (text) => {
//       dispatch(createActionHandleTextPost(text));
//     },
//   }
// };

// export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);


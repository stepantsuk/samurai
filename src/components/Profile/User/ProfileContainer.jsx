import React from 'react';
import Profile from './Profile';
import { createActionAddPost, createActionHandleTextPost } from './../../../redux/profilePageReducer'
import { connect } from 'react-redux';
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


const mapStateToProps = (state) => {
  return {
    profileState: state.profilePage,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBtn: () => {
      dispatch(createActionAddPost());
    },
    textPost: (text) => {
      dispatch(createActionHandleTextPost(text));
    },
  }
};

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);


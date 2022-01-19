import React from 'react';
import Profile from './Profile';
import { createActionAddPost, createActionHandleTextPost, setUsersProfile } from './../../../redux/profilePageReducer'
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


class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
      this.props.setUsersProfile(response.data);
    });
  };

  render() {
    return (
      <Profile {...this.props} />
    )
  };


}

const mapStateToProps = (state) => {
  return {
    profileState: state.profilePage,
  }
};

/*
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
*/

export default connect(mapStateToProps, { createActionAddPost, createActionHandleTextPost, })(ProfileContainer);


import React, { useState } from 'react';
import { Preloader } from '../../Common/Preloader';
import ava from './../../../img/leo.png';
import user from './ProfileInfo.module.css';
import { ProfileStatusHook } from './ProfileStatusHook';
import { ProfileDataInfo } from './ProfileDataInfo';
import { ProfileEditForm } from './ProfileEditForm';

const ProfileInfo = (props) => {
  
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }
  
  // const activeEditMode = () => {
  //   setEditMode(true)
  // };

  // const deactiveEditMode = () => {
  //   setEditMode(false);
  // };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    };
  };


  return (
    <div className={user.user}>
      <img src={props.profile.photos.large || ava} className={user.mainPhoto} />
      <div>
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}></input>}
      </div>
      <ProfileStatusHook status={props.status} updateUserProfileStatus={props.updateUserProfileStatus} />
      {editMode ?
        <ProfileEditForm profile={props.profile} saveProfile={props.saveProfile} setEditMode={setEditMode}/>
        :
        <ProfileDataInfo profile={props.profile} isOwner={props.isOwner} setEditMode={setEditMode}/>}
    </div>
  )
}

export default ProfileInfo;
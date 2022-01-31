import React from 'react';
import { Preloader } from '../../Common/Preloader';
import user from './User.module.css';
import ava from './../../../img/ava.jpg';

const User = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className={user.user}>
      <img src={props.profile.photos.small != null ? props.profile.photos.small : ava } />
      <div> my name is {props.profile.fullName}</div>
      <div>
        {props.profile.lookingForAJob ? <div>i am looking for a job at the moment</div> : <div>i am not looking for a job at the moment</div>}
      </div>
      <div>
        my socials
        <div>
          facebook: {props.profile.contacts.facebook ? props.profile.contacts.facebook : 'not'}
        </div>
        <div>
          website: {props.profile.contacts.website ? props.profile.contacts.website : 'not'}
        </div>
        <div>
          vk: {props.profile.contacts.vk ? props.profile.contacts.vk : 'not'}
        </div>
        <div>
          twitter: {props.profile.contacts.twitter ? props.profile.contacts.twitter : 'not'}
        </div>
        <div>
          instagram: {props.profile.contacts.instagram ? props.profile.contacts.instagram : 'not'}
        </div>
        <div>
          github: {props.profile.contacts.github ? props.profile.contacts.github : 'not'}
        </div>
        <div>
          mainLink: {props.profile.contacts.mainLink ? props.profile.contacts.mainLink : 'not'}
        </div>
      </div>
    </div>
  )
}

export default User;
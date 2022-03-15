import React from 'react';

export let ProfileDataInfo = (props) => {
  
  return (
    <div>
      <div>
        my name is {props.profile.fullName}
      </div>
      <div>
        {props.profile.lookingForAJob ?
          <div>
            <div>
              i am looking for a job at the moment, my skills is:
            </div>
            {props.profile.lookingForAJobDescription}
          </div> :
          <div>i am not looking for a job at the moment</div>}
      </div>
      <ProfileDataInfoContact contacts={props.profile.contacts} />
    </div>
  )
};

let ProfileDataInfoContact = ({contacts}) => {
  return (
    <div>
      <b>my socials are :</b>
      {Object.keys(contacts).map(key => {
        return <Contacts contactKey={key} contactValue={contacts[key]}/>
      })}
    </div>
  )
};

let Contacts = ({contactKey, contactValue}) => {
  return (
    <div>
      <b>{contactKey}:</b>{contactValue}
    </div>
  )
};
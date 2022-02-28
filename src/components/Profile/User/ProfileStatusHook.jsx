import React, { useState } from "react";

export const ProfileStatusHook = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activeEditMode = () => {
    setEditMode(true)
  };

  const deactiveEditMode = () => {
    setEditMode(false);
    props.updateUserProfileStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }


  return (
    <div>
      {editMode ?
        <div>
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactiveEditMode} value={status} />
        </div>
        :
        <div>
          <span onDoubleClick={activeEditMode}>{props.status || 'this User is without status'}</span>
        </div>}
    </div>
  )
};


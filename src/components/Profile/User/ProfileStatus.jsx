import React from "react";

export class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status,
  }

  activeEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactiveEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateUserProfileStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    };
  }


  render() {
    console.log('render')
    return (
      <div>
        {this.state.editMode ?
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveEditMode} value={this.state.status} />
          </div>
          :
          <div>
            <span onDoubleClick={this.activeEditMode}>{this.props.status || 'this User is without status'}</span>
          </div>}
      </div>
    )
  }
};
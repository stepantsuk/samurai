import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { authMe } from './../../redux/authReducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authMe();
  };

  render() {
    return <Header {...this.props} />
  }

};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { authMe })(HeaderContainer);

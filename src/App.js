import './App.css';
import React from 'react';
import { Component } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
//import ProfileContainer from './components/Profile/User/ProfileContainer';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Friends } from './components/Friends/Friends';
//import UsersContainer from './components/Users/UsersContainer';
import { LoginFormContainer } from './components/Login/LoginFormControl';
import { connect } from "react-redux";
import { initializeApp } from './redux/appReducer';
import { Preloader } from './components/Common/Preloader';

const ProfileContainer = React.lazy(() => {
  return (
    import('./components/Profile/User/ProfileContainer')
  )
});

const UsersContainer = React.lazy(() => {
  return (
    import('./components/Users/UsersContainer')
  )
});

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      //раньше контейнерная дивка className='app-wrapper' была обернута BrowserRouter, я перенес ее в индекс, то есть апп сейчас в индексе обернута барузерроутером, зачем ? поиграться, там в комментах к уроку #80 писали о проблемах, если использовать withRouter 
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar /*friendsData={props.state.sideBarFriends}*/ />
        <div className='app-wrapper-container'>
          <React.Suspense fallback={<h1>Loading...</h1>} >
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
          </React.Suspense >
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/friends' render={() => <Friends />} />
          <Route path='/login' render={() => <LoginFormContainer />} />
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);

// export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);

// я не знаю как использовать с withRouter или без, если навигация слетит, то наверно с withRouter, сейчас оба варианта работают, при этом withRouter может лежать только внутри BrowserRouter, поэтому, я эту обретку вынес в индексджиэс
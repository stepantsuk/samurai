import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/User/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Friends } from './components/Friends/Friends';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import { Users } from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';
import { LoginForm } from './components/Login/LoginFormControl';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar /*friendsData={props.state.sideBarFriends}*//>
        <div className='app-wrapper-container'>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
          <Route path='/dialogs' render={ () => <DialogsContainer /> } />
          <Route path='/users' render={ () => <UsersContainer /> } />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />
          <Route path='/friends' render={ () => <Friends />} />
          <Route path='/login' render={ () => <LoginForm />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {ProfileContainer} from './components/Profile/User/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Friends } from './components/Friends/Friends';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar /*friendsData={props.state.sideBarFriends}*//>
        <div className='app-wrapper-container'>
          <Route path='/profile' render={ () => <ProfileContainer />} />
          <Route path='/dialogs' render={ () => <DialogsContainer /> } />
          <Route path='/users' render={ () => <div>users</div> } />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />
          <Route path='/friends' render={ () => <Friends />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


// <Route path='/dialogs' render={ () => <Dialogs dialogsData={props.state.dialogsPage} dispatch={props.dispatch} /> } />
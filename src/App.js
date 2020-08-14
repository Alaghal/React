import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogContainer from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/UsersContainaer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
    return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer />
                <div className={'app-wrapper-content'}>
                    <Route path='/profile/:userId?'  render={() => <ProfileContainer />}/>
                    <Route path='/messages' render={() => <DialogContainer />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>
                </div>
            </div>

    )
}

export default App;

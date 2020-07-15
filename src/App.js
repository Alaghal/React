import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogContainer from "./components/Dialog/DialogContainer";
import UsersContainer from "./components/Users/UsersContainaer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (

            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer />
                <div className={'app-wrapper-content'}>
                    <Route path='/profile/:userId?'  render={() => <ProfileContainer />}/>
                    <Route path='/messages' render={() => <DialogContainer />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>

    )
}

export default App;

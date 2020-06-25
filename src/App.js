import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogContainer from "./components/Dialog/DialogContainer";

const App = (props) => {
    return (

            <div className='app-wrapper'>
                <Header/>
                <Navbar dataNavbar={props.state.navBarPage}/>
                <div className={'app-wrapper-content'}>
                    <Route path='/profile'  render={() => <Profile postPage={props.state.postPage} dispatch={props.dispatch}/>}/>
                    <Route path='/messages' render={() => <DialogContainer dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>

    )
}

export default App;

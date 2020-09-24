import React from 'react';
import './App.css';
import News from './comp/pages/News/News';
import Music from './comp/pages/Music/Music';
import Settings from './comp/pages/Settings/Settings';
import Navbar from './comp/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./comp/pages/Dialogs/DialogsContainer";
import UsersContainer from "./comp/Users/UsersContainer";
import ProfileContainer from "./comp/pages/Profile/ProfileContainer";
import HeaderContainer from "./comp/Header/HeaderContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar sidebar={props.store.getState().sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer
                        store={props.store}
                        state={props.state}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer
                               state={props.state}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path='/users' render={() => <UsersContainer
                        state={props.state}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

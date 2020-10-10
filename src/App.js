import React, {Suspense} from 'react';
import './App.css';
import News from './comp/pages/News/News';
import Music from './comp/pages/Music/Music';
import Settings from './comp/pages/Settings/Settings';
import Navbar from './comp/Navbar/Navbar';
import {Route} from 'react-router-dom';
//import DialogsContainer from "./comp/pages/Dialogs/DialogsContainer";
import UsersContainer from "./comp/Users/UsersContainer";

import HeaderContainer from "./comp/Header/HeaderContainer";
import Login from "./comp/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import withRouter from "react-router-dom/es/withRouter";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./comp/Common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./comp/pages/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./comp/pages/Profile/ProfileContainer"));

//import ProfileContainer from "./comp/pages/Profile/ProfileContainer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>

        }
        return (
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar sidebar={this.props.store.getState().sidebar}/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => {
                            return <Suspense fallback={<div>Загрузка....</div>}>
                                <DialogsContainer
                                    store={this.props.store}
                                    state={this.props.state}
                                    dispatch={this.props.dispatch}
                                /></Suspense>
                        }}/>
                        <Route path='/profile/:userId?'
                               render={() => {
                                   return <Suspense
                                       fallback={<div>Загрузка....</div>}>
                                       <ProfileContainer
                                           state={this.props.state}
                                           dispatch={this.props.dispatch}
                                       /></Suspense>
                               }}/>
                        <Route path='/users' render={() => <UsersContainer
                            state={this.props.state}
                            dispatch={this.props.dispatch}
                        />}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

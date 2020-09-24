import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://nodejs.org/static/images/logo.svg'/>
            <div className={s.loginBlock}>
                {props.isAuth ? <span> {props.login} </span> :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;
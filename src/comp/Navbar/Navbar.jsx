import React from 'react';
import Menu from "./Menu/Menu";
import Sidebar from "./Sidebar/Sidebar";
import s from './Navbar.module.css';

const Navbar = (props) => {
    //alert(props.sidebar);
    return (
        <nav className={s.nav}>
            <Menu/>
            <Sidebar sidebar={props.sidebar}/>
        </nav>
    )
}

export default Navbar;
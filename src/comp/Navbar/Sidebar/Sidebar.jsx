import React from 'react';
import s from './Sidebar.module.css';
import ElementSb from "./ElementSb/ElementSb";

const Sidebar = (props) => {
    let sidebarElements = props.sidebar.members.map(s => <ElementSb
        key={s.id}
        name={s.name}
        photo={s.photo}
    />);
    return (
        <div className={s.side}>
            {sidebarElements}
        </div>
    )
}

export default Sidebar;
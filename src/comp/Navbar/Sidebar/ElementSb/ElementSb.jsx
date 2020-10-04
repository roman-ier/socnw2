import React from 'react';
import s from './ElementSb.module.css';

const ElementSb = (props) => {
    return (
        <div>
            <img className={s.img} src={props.photo} alt=""/>
            <span className={s.span}>{props.name}</span>
        </div>
    )
}
export default ElementSb;
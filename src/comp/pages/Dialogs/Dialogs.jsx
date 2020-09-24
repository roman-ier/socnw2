import React from 'react';
//import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import Redirect from "react-router-dom/es/Redirect";


const Dialogs = (props) => {
    let state = props.dialogPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem
        name={d.name} key={d.id}/>);
    let messagesElements = state.messages.map(m => <Message
        message={m.message} key={m.id}/>);
    let onDiaChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    let onAddDia = () => {
        props.sendMessages();
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <h3>my posts</h3>
                <div>
                    <textarea placeholder='messageText' onChange={onDiaChange}
                              value={state.newDialog}/>
                    <button onClick={onAddDia}>add Dia</button>
                    <button>rm</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
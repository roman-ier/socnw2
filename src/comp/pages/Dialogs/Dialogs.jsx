import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import Redirect from "react-router-dom/es/Redirect";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
    let state = props.dialogPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem
        name={d.name} key={d.id}/>);
    let messagesElements = state.messages.map(m => <Message
        message={m.message} key={m.id}/>);

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    const addNewMessage = (val) => {
        props.sendMessages(val.onDiaChange)
        //props.resetForm()

    }
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
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;
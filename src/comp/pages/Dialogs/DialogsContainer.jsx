import React from 'react';
import {addDiaActionCreator, updateDiaChangeActionCreator} from '../../../redux/dialog-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateDiaChangeActionCreator(body));
        },
        sendMessages: () => {
            dispatch(addDiaActionCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
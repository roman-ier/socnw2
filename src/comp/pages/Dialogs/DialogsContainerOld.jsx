import React from 'react';
import {addDiaActionCreator, updateDiaChangeActionCreator} from '../../../redux/dialog-reducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const DialogsContainer = (props) => {

}
let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateDiaChangeActionCreator(body));
        },
        sendMessages: (dispatch) => {
            dispatch(addDiaActionCreator());
        }
    }
}
const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
import React from 'react';
import {addMessageDialogAction, updateMessageDialog} from "../../Redux/dialogsReducer";
import Dialog from "./Dialog";

const DialogContainer = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageDialogAction());
    }

    let updateMessage = (text) => {
        props.dispatch(updateMessageDialog(text));
    }
    return (
        <Dialog addMessage={addMessage}  updateMessage={updateMessage} dialogsPage={props.dialogsPage}/>
    );
}

export default DialogContainer;
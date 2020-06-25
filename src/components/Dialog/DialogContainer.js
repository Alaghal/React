import React from 'react';
import {addMessageDialogAction, updateMessageDialog} from "../../Redux/dialogsReducer";
import Dialog from "./Dialog";

const DialogContainer = (props) => {

    let addMessage = () => {
        props.store.dispatch(addMessageDialogAction());
    }

    let updateMessage = (text) => {
        props.store.dispatch(updateMessageDialog(text));
    }
    return (
        <Dialog addMessage={addMessage}  updateMessage={updateMessage} dialogsPage={props.state.dialogsPage} />
    );
}

export default DialogContainer;
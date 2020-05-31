import React from 'react';
import classes from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageDialogAction, updateMessageDialog} from "../../Redux/dialogsReducer";

const Dialog = (props) => {
    let dialogItem = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} imgPath={d.imgPath}/>);
    let messageItem = props.dialogsPage.messages.map(m => <Message message={m.message} idUser={m.idUser}/>);

    let newMessageText = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageDialogAction());
        newMessageText.current.value = '';
    }

    let updateMessage = () => {
        let text = newMessageText.current.value;
        props.dispatch(updateMessageDialog(text));
    }
    return (
        <div className={classes.dialogs}>
            <div>
                {dialogItem}
            </div>
            <div className={classes.messagePage}>
                {messageItem}
                <div>
                    <div className={classes.addMessageBox}>
                        <textarea placeholder={"Write message"} ref={newMessageText} onChange={updateMessage}></textarea>
                    </div>
                    <div className={classes.addMessageButton}>
                        <button onClick={addMessage}>Send message</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialog;
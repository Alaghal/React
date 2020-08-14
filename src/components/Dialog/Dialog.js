import React from 'react';
import classes from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialog = (props) => {

    if (props.isAuth) {return <Redirect to={"/login"} />}

    let dialogItem = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name} imgPath={d.imgPath}/>);
    let messageItem = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id} idUser={m.idUser}/>);

    let newMessageText = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let updateMessage = () => {
        let text = newMessageText.current.value;
        props.updateMessage(text);
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
                        <textarea placeholder={"Write message"} ref={newMessageText} onChange={updateMessage} value={props.dialogsPage.newDialogMessage}></textarea>
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
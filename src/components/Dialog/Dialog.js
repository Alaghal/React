import React from 'react';
import classes from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialog = (props) => {
    let dialogItem = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} imgPath={d.imgPath}/>);
    let messageItem = props.dialogsPage.messages.map(m => <Message message={m.message} idUser={m.idUser}/>);

    let newMessageText = React.createRef();

    let addMessage = () => {
        let text = newMessageText.current.value();
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
                        <textarea ref={newMessageText}>Add message</textarea>
                    </div>
                    <div className={classes.addMessageButton}>
                        <button>Send message</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dialog;
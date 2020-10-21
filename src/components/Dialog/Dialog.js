import React from 'react';
import classes from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialog = (props) => {

    let dialogItem = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} name={d.name}
                                                                    imgPath={d.imgPath}/>);
    let messageItem = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} id={m.id}
                                                                   idUser={m.idUser}/>);

    let addMessageChange = (values) => {
        props.sendMessage(values.newMessageText);
    }

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogItem}
            </div>
            <div className={classes.messagePage}>
                {messageItem}
                <AddMessageReduxForm onSubmit={addMessageChange}/>
            </div>

        </div>
    );
}
const SendMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div className={classes.addMessageBox}>
            <Field component={"textarea"} name={"newMessageText"} placeholder={"Enter your message"}/>
        </div>
        <div className={classes.addMessageButton}>
            <button>Send message</button>
        </div>
    </form>)
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(SendMessageForm)

export default Dialog;
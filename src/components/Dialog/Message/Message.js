import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {

    let currentUserId = "1";

    if (props.idUser === currentUserId) {
        return (
            <div>
                <div className={`${classes.messageCurrentUser} ${classes.message}`}>
                    {props.message}
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className={`${classes.messageOtherUser} ${classes.message}`}>
                {props.message}
            </div>
        </div>
    );
}

export default Message;
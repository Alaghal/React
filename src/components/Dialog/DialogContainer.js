import React from 'react';
import {addMessageDialogAction, updateMessageDialog} from "../../Redux/dialogsReducer";
import Dialog from "./Dialog";
import StoreContext from "../../StoreContext";

const DialogContainer = (props) => {
    return (<StoreContext.Consumer>
        {
            store => {
            let state = store.getState()
            let addMessage = () => {
                store.dispatch(addMessageDialogAction())
            }

            let updateMessage = (text) => {
                store.dispatch(updateMessageDialog(text))
            }

            return (<Dialog addMessage={addMessage} updateMessage={updateMessage}
                            dialogsPage={state.dialogsPage}/>)
        }

    }
    </StoreContext.Consumer>)


}

export default DialogContainer;
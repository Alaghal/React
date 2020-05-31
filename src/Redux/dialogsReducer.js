const ADD_DIALOG_MESSAGE = 'ADD_DIALOG_MESSAGE';
const UPDATE_DIALOG_MESSAGE = 'UPDATE_DIALOG_MESSAGE';


const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            let messageDialog = {
                id: "1",
                idUser: "1",
                message: state.newDialogMessage
            };

            state.messages.push(messageDialog);
            state.newDialogMessage = '';
            return state;
        case  UPDATE_DIALOG_MESSAGE:
            state.newDialogMessage = action.newText;
            return state;
        default:
            return  state;
    }

}

export const addMessageDialogAction = () => ({type: ADD_DIALOG_MESSAGE});

export const updateMessageDialog = (text) => ({type: UPDATE_DIALOG_MESSAGE, newText: text})

export default dialogReducer;
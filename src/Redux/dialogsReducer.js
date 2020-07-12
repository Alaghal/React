const ADD_DIALOG_MESSAGE = 'ADD_DIALOG_MESSAGE';
const UPDATE_DIALOG_MESSAGE = 'UPDATE_DIALOG_MESSAGE';

let initialState = {
    dialogs: [
        {
            id: "1",
            name: "Dima",
            imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_dCbBD6aJ4J64K6Dqty7QllDRKMY1Svul7t0GGl6XtmgITPHw&usqp=CAU'
        },
        {
            id: "2",
            name: "Andrey",
            imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaxwPalEZIjte_K7AbTKiWVlibwRnkEYPb6SSjWYNmzzG6mhnz&usqp=CAU'
        },
        {
            id: "3",
            name: "Nik",
            imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbGKaJrBHYeVi_0V1flq2rxtnvp9TCqC2kjA-oBgNXQy1nGqOH&usqp=CAU'
        },
        {
            id: "4",
            name: "Sasha",
            imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_ByxEfrNqUK1_NheZWuaA3Su-YEpiNyLir-i4lcbO44UhqXfZ&usqp=CAU'
        },
        {
            id: "5",
            name: "Igor",
            imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDsWwDlFf7PJ5JMf0fzQeJh-r9HSmwM-MlkA8SMxuJOYORifeY&usqp=CAU'
        },
        {
            id: "6",
            name: "Egor",
            imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCj0yg6FKo57lV41q7dK0zn-dVyx7Ka3phWxQYxA0HfikF6_V4&usqp=CAU'
        },
        {
            id: "7",
            name: "Pasha",
            imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbZbzKhdzKYTRulkhfxQN69ejCl3XNXOjCevrImb9n0KYL88y6&usqp=CAU'
        }
    ],

    messages: [
        {id: "1", idUser: "1", message: "Привет"},
        {id: "2", idUser: "1", message: "Как дела?"},
        {id: "3", idUser: "4", message: "Привет"},
        {id: "4", idUser: "4", message: "заебись, у тебя как ?"},
        {id: "5", idUser: "1", message: "тож норм=)"},
    ],
    newDialogMessage: ''
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {
                    id: "1",
                    idUser: "1",
                    message: state.newDialogMessage
                }],
                newDialogMessage: ''
            }
        }
        case  UPDATE_DIALOG_MESSAGE: {
            return {
                ...state,
                newDialogMessage: action.newText
            }
        }

        default:
            return state;
    }

}

export const addMessage = () => ({type: ADD_DIALOG_MESSAGE});

export const updateMessage = (text) => ({type: UPDATE_DIALOG_MESSAGE, newText: text})

export default dialogReducer;
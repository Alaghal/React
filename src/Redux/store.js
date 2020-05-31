import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";

let store = {
    _state: {
        postPage: {
            messagesPost: [
                {id: "1", message: "Message 1", countLike: "12"},
                {id: "2", message: "Message 2", countLike: "10"},
                {id: "3", message: "Message 3", countLike: "15"},
                {id: "4", message: "Message 4", countLike: "17"},
            ],
            newPostText: ""
        },
        dialogsPage: {
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
            newDialogMessage: ""
        },
        navBarPage: {
            friends: [
                {
                    id: "1",
                    name: "Nik",
                    url: "data:image/png;base64,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"
                },
                {
                    id: "2",
                    name: "Vera",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3DH2t1QUL4nlaenJb19cU-UPUa8AXOY0eEL2q1lXS5CEcMmtV&usqp=CAU"
                },
                {
                    id: "3",
                    name: "Dima",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTWs_uiljd236sZFSM34x275hzJhF50t-ihgn-EUxArY1iUGwt&usqp=CAU"
                }
            ]
        }
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.postPage = profileReducer(this._state.postPage, action);
        this._state.navBarPage = navbarReducer(this._state.navBarPage, action);
        this._callSubscriber(this._state);
    },

    _callSubscriber() {
    },

    subscriber(observer) {
        this._callSubscriber = observer;
    }

}

export default store






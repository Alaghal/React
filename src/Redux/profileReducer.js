const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST-NEW-TEXT';

let initialState = {
    messagesPost: [
        {id: "1", message: "Message 1", countLike: "12"},
        {id: "2", message: "Message 2", countLike: "10"},
        {id: "3", message: "Message 3", countLike: "15"},
        {id: "4", message: "Message 4", countLike: "17"},
    ],
    newPostText: 'it'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                messagesPost: [...state.messagesPost, { id: "5",
                    message: state.newPostText,
                    countLike: "0"} ],
                newPostText: ''
            }
        }
        case  UPDATE_POST: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }

}

export const addPost = () => ({type: ADD_POST});

export const updatePost = (text) => ({type: UPDATE_POST, newText: text});

export default profileReducer;
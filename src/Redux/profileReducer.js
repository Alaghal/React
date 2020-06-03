const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST-NEW-TEXT';

let initialState = {
    messagesPost: [
        {id: "1", message: "Message 1", countLike: "12"},
        {id: "2", message: "Message 2", countLike: "10"},
        {id: "3", message: "Message 3", countLike: "15"},
        {id: "4", message: "Message 4", countLike: "17"},
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "5",
                message: state.newPostText,
                countLike: "0"
            };
            state.messagesPost.push(newPost);
            state.newPostText = '';

            return state;
        case  UPDATE_POST:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostAction = () => ({type: ADD_POST});

export const updatePostAction = (text) => ({type: UPDATE_POST, newText: text});

export default profileReducer;
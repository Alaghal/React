const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST-NEW-TEXT';


const profileReducer = (state, action) => {

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
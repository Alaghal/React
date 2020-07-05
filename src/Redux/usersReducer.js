const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {
            id: '1',
            photoUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCh2HL6gyd6hL3rYZYVTHxRwiU3sp1wRQ4MQ&usqp=CAU',
            name: 'Dmitriy',
            followed: true,
            status: 'life it\'s funny ',
            location: {country: 'Russia', city: 'Tomsk'}
        },
        {
            id: '2',
            photoUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUeS7MElXNtyGMsTQQGsd4I6DzlSabjMsKdA&usqp=CAU',
            name: 'Andrey',
            followed: false,
            status: 'Awesome!',
            location: {country: 'Russia', city: 'Moscow'}
        },
        {
            id: '3',
            photoUser: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR6l8ZK-1uwDPLNw6IeYnoWNwrvC8weWjWlQ&usqp=CAU',
            name: 'Aleksandr',
            followed: false,
            status: 'Fucking police',
            location: {country: 'Russia', city: 'Novosibirsk'}
        },
        {
            id: '4',
            photoUser: 'https://i.pinimg.com/originals/0a/b4/ff/0ab4fff8398b88ef64964e276a16c647.jpg',
            name: 'Vladimir',
            followed: true,
            status: 'Hi  everyone !',
            location: {country: 'Russia', city: 'Tomsk'}
        }
    ],

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true }
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false }
                    }
                    return u;
                })
            }
        }
        default:
            return state;
    }

}

export const followAC = (id) => ({type: FOLLOW, userId:id });

export const unFollowAC = (id) => ({type: UNFOLLOW, userId: id });

export default usersReducer;
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 10,
    numberCurrentPage:2

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                numberCurrentPage: action.numberCurrentPage
            }
        }
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        }
        default:
            return state;
    }

}

export const followAC = (id) => ({type: FOLLOW, userId: id});

export const unFollowAC = (id) => ({type: UNFOLLOW, userId: id});

export const setUsersAC = (users) => ({type: SET_USERS, users: users})

export const setCurentPageAC = (numberOfPage) => ({type: SET_CURRENT_PAGE, numberCurrentPage: numberOfPage})

export const setTotalUserAC = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers: totalUsers})

export default usersReducer;
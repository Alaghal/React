import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_FETCHING_STATUS = 'TOGGLE_FETCHING_STATUS';
const TOGGLE_FETCHING_IN_PROGRESS = 'TOGGLE_FETCHING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 10,
    numberCurrentPage: 2,
    isFetching: false,
    followingInProgress: []

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
        case TOGGLE_FETCHING_STATUS: {
            return {
                ...state,
                isFetching: action.fetchingStatus
            }
        }
        case TOGGLE_FETCHING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress.filter(), action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }

}

export const followSuccess = (id) => ({type: FOLLOW, userId: id});

export const unFollowSuccess = (id) => ({type: UNFOLLOW, userId: id});

export const setUsers = (users) => ({type: SET_USERS, users: users})

export const setCurentPage = (numberOfPage) => ({type: SET_CURRENT_PAGE, numberCurrentPage: numberOfPage})

export const setTotalUserCount = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers: totalUsers})

export const toggleFetchingStatus = (fetchingStatus) => ({type: TOGGLE_FETCHING_STATUS, fetchingStatus: fetchingStatus})

export const toggleFollowingInProgress = (fetchingStatus, userId) => ({
    type: TOGGLE_FETCHING_IN_PROGRESS,
    fetchingStatus,
    userId
})

export const getUsers = (currentPage, pageSize) => {
   return  (dispatch) => {
        dispatch(toggleFetchingStatus(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleFetchingStatus(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUserCount(data.totalCount));
            })
    }
}

export const unFollow = (id) => {
    return  (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.unFollow(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unFollowSuccess(id))
                }
                dispatch(toggleFollowingInProgress(id));
            });
    }
}

export const follow = (id) => {
    return  (dispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.follow(id)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccess(id))
                }
                dispatch(toggleFollowingInProgress(id));
            });
    }
}

export default usersReducer;
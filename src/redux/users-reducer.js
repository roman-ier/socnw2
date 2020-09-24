import {requestAPI} from "../api/api";

const ACCEPT_FOLLOW = 'ACCEPT_FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
let initialState = {
    users: [
        /*{
            id: 0,
            photoUrl: 'https://krot.info/uploads/posts/2019-09/1569245150_dmitrij-nagiev-9.jpg',
            followed: true,
            fullName: 'Roman',
            status: 'boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 1,
            photoUrl: 'https://shoowbiz.ru/news/wp-content/uploads/2018/12/36148578_624518731239485_6288282839507009536_n.jpg',
            followed: false,
            fullName: 'Swetlana',
            status: 'boss2',
            location: {city: 'Warshaw', country: 'Poland'}
        },
        {
            id: 2,
            photoUrl: 'https://n1s1.hsmedia.ru/c3/96/68/c3966872857c3496d85065186cc62201/1080x1350_0xac120003_3765753241588248538.jpg',
            followed: true,
            fullName: 'Egor',
            status: 'boss3',
            location: {city: 'Kiyv', country: 'Ukraine'}
        }*/
    ],
    showMore: '2',
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACCEPT_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;

    }
}

export const followSuccess = (userId) => ({type: ACCEPT_FOLLOW, userId})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        requestAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        requestAPI.postFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        requestAPI.deleteFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        });
    }
}

export default usersReducer;
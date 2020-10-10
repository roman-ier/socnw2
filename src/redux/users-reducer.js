import {requestAPI} from "../api/api";
import {updateObjectInArray} from "../utils/helper/objectHelperArrayMap";

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
                users: updateObjectInArray(state.users,
                    action.userId,
                    "id",
                    {followed: !action.followed})

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
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;

    }
}

export const followSuccess = (userId, followed) => ({
    type: ACCEPT_FOLLOW,
    userId,
    followed
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        const data = await requestAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, followed) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId, followed));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId, followed) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, requestAPI.postFollow.bind(requestAPI), followed);

    }
}
export const unfollow = (userId, followed) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, requestAPI.deleteFollow.bind(requestAPI), followed);
    }
}

export default usersReducer;
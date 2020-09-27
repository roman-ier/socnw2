import {requestAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 0},
        {id: 2, message: 'ist my first post', likesCount: 23},
        {id: 3, message: 'Yo', likesCount: 2}
    ],
    profile: null,
    status: 'start'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost]};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }

        default:
            return state;

    }

}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userId) => (dispatch) => {
    requestAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const getStatus = (userId) => (dispatch) => {
    requestAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}
export const updateStatus = (status) => (dispatch) => {
    requestAPI.updateStatus(status)
        .then(response => {

            if (response.data.resultCode === 0) {
                dispatch(updateStatus(response.data));
            }
        });
}


export default profileReducer;
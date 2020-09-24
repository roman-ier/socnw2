import {requestAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}
export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}})
export const getAuthUserData = () => (dispatch) => {
    requestAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email));
        }
    });

}
export default authReducer;
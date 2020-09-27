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
            return {...state, ...action.payload}
        default:
            return state;
    }
}
export const setAuthUserData = (id, login, email, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})
export const getAuthUserData = () => (dispatch) => {
    requestAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    });

}
export const login = (email, password, rememberMe) => (dispatch) => {
    requestAPI.postLogin(email, password, rememberMe).then(response => {
        debugger
        alert(response.data.resultCode)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        }
    })

}
export const deleteLogout = () => (dispatch) => {
    requestAPI.deleteLogout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })

}
export default authReducer;
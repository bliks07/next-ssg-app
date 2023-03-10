import {
    SET_AUTH_STATE,
    GET_CURRENT_USER, GET_CURRENT_USER_SUCCESS,
    SIGN_OUT_USER,
} from '../action-types'

export const setAuthState = (state) => {
    return {
        type: SET_AUTH_STATE,
        payload: state,
    }
}

export const getCurrentUser = (token) => {
    return {
        type: GET_CURRENT_USER,
        token: token
    }
}

export const getCurrentUserSuccess = (data) => {
    return {
        type: GET_CURRENT_USER_SUCCESS,
        payload: data,
    }
}

export const signOutUser = (state) => {
    return {
        type: SIGN_OUT_USER,
        payload: state,
    }
}













import {
    SET_AUTH_STATE,
    GET_CURRENT_USER, GET_CURRENT_USER_SUCCESS
} from '../action-types'

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

export const setAuthState = (state) => {
    return {
        type: SET_AUTH_STATE,
        payload: state,
    }
}











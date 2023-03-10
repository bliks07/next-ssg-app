import {
    SET_COMMON_STATE,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_EXPIRED,
    FETCH_ERROR,
    SET_USER_LOCALE,
} from '../action-types'

export const setCommonState = (state) => {
    return {
        type: SET_COMMON_STATE,
        payload: state,
    }
}

export const fetchStart = () => {
    return {
        type: FETCH_START
    }
}

export const fetchSuccess = () => {
    return {
        type: FETCH_SUCCESS
    }
}

export const fetchExpired = () => {
    return {
        type: FETCH_EXPIRED
    }
}

export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}

export const setUserLocale = (locale) => {
    return {
        type: SET_USER_LOCALE,
        payload: locale
    }
}

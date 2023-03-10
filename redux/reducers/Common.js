import {
    SET_COMMON_STATE,
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_EXPIRED,
    FETCH_ERROR,
    SET_USER_LOCALE,
} from '../action-types'

const initialState = {
    error: '',
    message: '',
    loading: false,
    expired: false,
    userLocale: 'en',
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_COMMON_STATE: {
            return {
                ...state,
                ...action?.payload
            }
        }

        case FETCH_START: {
            return { ...state, error: '', message: '', loading: true }
        }

        case FETCH_SUCCESS: {
            return { ...state, error: '', message: '', loading: false }
        }

        case FETCH_EXPIRED: {
            return { ...state, error: '', message: '', loading: false, expired: true }
        }

        case FETCH_ERROR: {
            return { ...state, error: action.payload, message: '', loading: false }
        }

        case SET_USER_LOCALE: {
            return {
                ...state,
                userLocale: action?.payload,
            }
        }

        default:
            return state
    }
}
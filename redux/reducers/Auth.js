import {
    SET_AUTH_STATE,
    GET_CURRENT_USER_SUCCESS,
    SIGN_OUT_USER,
} from '../action-types'

const localUser = 'next_ssg_app'

// Define your state here
const initialState = {
    loading: false,
    token: null,
    user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem(localUser)) || null : null,
}

// This export default will control your state for your application
export default (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_STATE: {
            return {
                ...state,
                ...action?.payload
            }
        }

        case GET_CURRENT_USER_SUCCESS:
            const user = action?.payload?.[0]
            localStorage.setItem(localUser, JSON.stringify(user))

            return {
                ...state,
                user,
                loading: false
            }

        case SIGN_OUT_USER: {
            localStorage.removeItem(localUser)

            return {
                ...state,
                user: null
            }
        }

        // Return default state if you didn't match any case
        default:
            return state
    }
}
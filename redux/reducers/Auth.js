import {
    SET_AUTH_STATE,
    GET_CURRENT_USER_SUCCESS,
} from '../action-types'


// Define your state here
const initialState = {
    loading: false,
    token: null,
    user: 'test user',
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

            return {
                ...state,
                user: action?.payload?.user,
                loading: false
            }

        // Return default state if you didn't match any case
        default:
            return state
    }
}
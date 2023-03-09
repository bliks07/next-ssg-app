// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux'

// Reducers
import Auth from './Auth'
import Common from './Common'

export default combineReducers({
    auth: Auth,
    common: Common,
})
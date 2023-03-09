// Import the redux-saga/effects
import {
    put,
    call,
    takeLatest,
    takeEvery
} from 'redux-saga/effects'

// Import all action types
import {
    GET_CURRENT_USER,
} from '../action-types'

// Import all actions
import {
    getCurrentUserSuccess,
} from '../actions/Auth'

// Import all api's
import {
    getCurrentUserRequest,
} from '../api/Auth'

// Import common actions
import { fetchStart, fetchSuccess, fetchError } from '../actions/Common'

// Here's the unique part, generator function*, function with asterisk(*)

function* getCurrentUser({ token }) {
    try {
        yield put(fetchStart())
        const response = yield call(getCurrentUserRequest, token)

        if (response.status === 200) {
            yield put(getCurrentUserSuccess(response.data))
            yield put(fetchSuccess())
        }

    } catch (error) {
        yield put(fetchError('error'))
    }
}

// Export the saga (todo-saga)
export default function* todoSaga() {
    yield takeEvery(GET_CURRENT_USER, getCurrentUser)
}
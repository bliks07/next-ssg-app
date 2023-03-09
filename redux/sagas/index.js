import { spawn } from 'redux-saga/effects'

// Sagas
import authSaga from './Auth'

// Export the root saga
export default function* rootSaga() {
    yield spawn(authSaga)
}
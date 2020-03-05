// import authReducer from './authReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import workOrderReducer from './workOrderReducer'
import { combineReducers } from 'redux'

const rootReducer =  combineReducers({
    // auth: authReducer,
    workOrder: workOrderReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer
import { combineReducers } from 'redux'
import userDetailReducer from './features/userDetails/userDetailSlice.js'
import userListReducer from './features/usersList/userListSlice.js'

const rootReducer = combineReducers({
	userData: userListReducer,
	userDetail: userDetailReducer,
})

export default rootReducer

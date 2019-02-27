import { combineReducers } from 'redux';

import FriendReducer from './FriendReducer';

export default combineReducers({
    friends: FriendReducer,
})
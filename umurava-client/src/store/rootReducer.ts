import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import challengeReducer from './challengeSlice';
import communityReducer from './communitySlice';

const rootReducer = combineReducers({
    user: userReducer,
    challenges: challengeReducer,
    community: communityReducer,
});

export default rootReducer;
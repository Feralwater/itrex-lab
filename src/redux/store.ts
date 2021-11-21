import { combineReducers, configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profileReducer';

const rootReducer = combineReducers({
  profile: profileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
export type RootStateType = ReturnType<typeof rootReducer>;

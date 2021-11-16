import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import appointmentReducer from './reducers/appointmentReducer';

const rootReducer = combineReducers({
  appointment: appointmentReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>;

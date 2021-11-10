import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import appointmentReducer from "./reducers/appointmentReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    appointment: appointmentReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export type AppRootStateType = ReturnType<typeof rootReducer>
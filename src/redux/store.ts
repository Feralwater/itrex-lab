import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { loginReducer } from './reducers/login.reducer';
import rootSaga from './sagas/rootSaga';
import { appointmentReducer } from './reducers/appointments.reducer';
import { registrationReducer } from './reducers/registration.reducer';
import { profileReducer } from './reducers/profile.reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    login: loginReducer,
    appointments: appointmentReducer,
    registration: registrationReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppDispatchType = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;

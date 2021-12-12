import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  loginReducer, appointmentReducer, registrationReducer,
  profileReducer, notificationReducer, appointmentsForPatientReducer,
  appointmentsForDoctorReducer, resolutionReducer, resolutionsReducer,
} from './reducers';
import rootSaga from './sagas/rootSaga';
import { editProfileReducer } from './reducers/editProfile.reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    login: loginReducer,
    appointments: appointmentReducer,
    registration: registrationReducer,
    profile: profileReducer,
    notification: notificationReducer,
    appointmentsForPatient: appointmentsForPatientReducer,
    appointmentsForDoctor: appointmentsForDoctorReducer,
    resolution: resolutionReducer,
    resolutions: resolutionsReducer,
    editProfile: editProfileReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['editProfile/pending'],
    },
  }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

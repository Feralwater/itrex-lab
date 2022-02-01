import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  loginReducer, appointmentReducer, registrationReducer,
  profileReducer, notificationReducer, appointmentsForPatientReducer,
  resolutionReducer, resolutionsReducer,
  occupationsReducer, doctorsByIDReducer, freeDoctorTimeReducer, cardsForDoctorReducer,
} from './reducers';
import rootSaga from './sagas/rootSaga';
import { editProfileReducer } from './reducers/editProfile.reducer';
import { editResolutionReducer } from './reducers/editResolution.reducer';
import { resolutionsForPatientReducer } from './reducers/resolutionsForPatient.reducer';
import { changePasswordReducer } from './reducers/changePassword.reducer';
import { editPatientProfileReducer } from './reducers/editPatientProfile.reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    login: loginReducer,
    appointments: appointmentReducer,
    registration: registrationReducer,
    profile: profileReducer,
    notification: notificationReducer,
    appointmentsForPatient: appointmentsForPatientReducer,
    resolution: resolutionReducer,
    resolutions: resolutionsReducer,
    editProfile: editProfileReducer,
    editResolution: editResolutionReducer,
    resolutionsForPatient: resolutionsForPatientReducer,
    occupations: occupationsReducer,
    doctorsByID: doctorsByIDReducer,
    freeDoctorTime: freeDoctorTimeReducer,
    changePassword: changePasswordReducer,
    editPatientProfile: editPatientProfileReducer,
    cardsForDoctor: cardsForDoctorReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['editProfile/pending', 'editPatientProfile/pending'],
    },
  }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

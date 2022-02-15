import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  loginReducer, makeAppointmentReducer, registrationReducer,
  profileReducer, notificationReducer, appointmentsForPatientReducer,
  resolutionReducer, resolutionsReducer,
  occupationsReducer, getDoctorsByIDReducer, freeDoctorTimeReducer, appointmentsForDoctorReducer,
} from './reducers';
import rootSaga from './sagas/rootSaga';
import { editProfileReducer } from './reducers/editProfile.reducer';
import { editResolutionReducer } from './reducers/editResolution.reducer';
import { resolutionsForPatientReducer } from './reducers/resolutionsForPatient.reducer';
import { changePasswordReducer } from './reducers/changePassword.reducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    login: loginReducer,
    makeAppointment: makeAppointmentReducer,
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
    getDoctorsByID: getDoctorsByIDReducer,
    freeDoctorTime: freeDoctorTimeReducer,
    changePassword: changePasswordReducer,
    appointmentsForDoctor: appointmentsForDoctorReducer,
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

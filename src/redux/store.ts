import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { getAllUsersReducer } from 'redux/reducers/allPatients.reducer';
import {
  loginReducer, makeAppointmentReducer, registrationReducer,
  profileReducer, notificationReducer, appointmentsForPatientReducer,
  resolutionsForDoctorReducer, occupationsReducer, getDoctorsByIDReducer,
  freeDoctorTimeReducer, appointmentsForDoctorReducer,
} from './reducers';
import rootSaga from './sagas/rootSaga';
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
    resolutionsForDoctor: resolutionsForDoctorReducer,
    resolutionsForPatient: resolutionsForPatientReducer,
    occupations: occupationsReducer,
    getDoctorsByID: getDoctorsByIDReducer,
    freeDoctorTime: freeDoctorTimeReducer,
    changePassword: changePasswordReducer,
    appointmentsForDoctor: appointmentsForDoctorReducer,
    getAllUsers: getAllUsersReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['profile/editProfilePending'],
    },
  }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import { createSlice } from '@reduxjs/toolkit';
import { DoctorsByIDState } from './reducers.types';
import { ROLES } from '../../routes/constants';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { doctorsByID } from '../actions';

const initialState = {
  doctors: [],
  status: FETCH_STATUS.IDLE,
} as DoctorsByIDState;

export const doctorsByIDSlice = createSlice({
  name: 'doctorsByID',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(doctorsByID.fulfilled, (state, { payload }) => ({
        ...state,
        doctors: payload.map((doctor) => ({ firstName: doctor.first_name, lastName: doctor.last_name, doctorID: doctor.id })),
        status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(doctorsByID.pending, (state) => ({ ...state, status: FETCH_STATUS.LOADING }));
    builder
      .addCase(doctorsByID.failed, (state) => ({ ...state, status: FETCH_STATUS.FAILED, roleName: ROLES.PUBLIC }));
  },
});

export const selectDoctorsByID = (state: RootState) => state.doctorsByID;

export const doctorsByIDReducer = doctorsByIDSlice.reducer;

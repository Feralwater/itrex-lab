import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DoctorsBySpecializationIdResponse } from 'resources/doctors/doctors.types';
import { DoctorsByIDState } from './reducers.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';

const initialState = {
  doctors: [],
  status: FETCH_STATUS.IDLE,
} as DoctorsByIDState;

export const getDoctorsByIDSlice = createSlice({
  name: 'getDoctorsByID',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<DoctorsBySpecializationIdResponse>) => ({
      ...state,
      doctors: action.payload.map((doctor) => ({ firstName: doctor.first_name, lastName: doctor.last_name, doctorID: doctor.id })),
      responseStatus: FETCH_STATUS.FULFILLED,
    }),
    pending: (state, action: PayloadAction<string>) => ({ ...state, id: action.payload, responseStatus: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }),
  },
});

export const selectDoctorsByID = (state: RootState) => state.getDoctorsByID;
export const getDoctorsByIDReducer = getDoctorsByIDSlice.reducer;

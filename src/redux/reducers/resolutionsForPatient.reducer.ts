import { createSlice } from '@reduxjs/toolkit';
import { resolutionsForPatient } from '../actions';
import { RootState } from '../store';
import { ResolutionsForPatientState } from './reducers.types';
import { FETCH_STATUS } from './constants';

const initialState = {
  resolutions: [],
  total: 0,
  status: FETCH_STATUS.IDLE,
} as ResolutionsForPatientState;

export const resolutionsForPatientSlice = createSlice({
  name: 'resolutionsForPatient',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resolutionsForPatient.fulfilled, (state, { payload }) => ({
        ...state, resolutions: payload.resolutions, total: payload.total, status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(resolutionsForPatient.pending, (state) => ({ ...state, status: FETCH_STATUS.LOADING }));
    builder
      .addCase(resolutionsForPatient.failed, (state) => ({ ...state, status: FETCH_STATUS.FAILED }));
  },
});

export const selectResolutionsForPatient = (state: RootState) => state.resolutionsForPatient;

export const resolutionsForPatientReducer = resolutionsForPatientSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { resolutionsForPatient } from '../actions';
import { RootState } from '../store';
import { ResolutionsState } from './reducers.types';

const initialState = {
  resolutions: [],
  total: 0,
  status: 'idle',
} as ResolutionsState;

export const resolutionsForPatientSlice = createSlice({
  name: 'resolutionsForPatient',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resolutionsForPatient.fulfilled, (state, { payload }) => ({
        ...state, resolutions: payload.resolutions, total: payload.total, status: 'fulfilled',
      }));
    builder
      .addCase(resolutionsForPatient.pending, (state) => ({ ...state, status: 'loading' }));
    builder
      .addCase(resolutionsForPatient.failed, (state) => ({ ...state, status: 'failed' }));
  },
});

export const selectResolutionsForPatient = (state: RootState) => state.resolutionsForPatient;

export const resolutionsForPatientReducer = resolutionsForPatientSlice.reducer;

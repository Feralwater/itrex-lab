import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ResolutionsForPatientState } from './reducers.types';
import { FETCH_STATUS } from './constants';
import { ResolutionsForPatientFulfilled, ResolutionsPending } from '../actions.types';

const initialState = {
  resolutions: [],
  total: 0,
  status: FETCH_STATUS.IDLE,
} as ResolutionsForPatientState;

export const resolutionsForPatientSlice = createSlice({
  name: 'resolutionsForPatient',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<ResolutionsForPatientFulfilled>) => ({ ...state, ...action.payload, status: FETCH_STATUS.FULFILLED }),
    pending: (state, action: PayloadAction<ResolutionsPending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
  },
});

export const selectResolutionsForPatient = (state: RootState) => state.resolutionsForPatient;
export const resolutionsForPatientReducer = resolutionsForPatientSlice.reducer;

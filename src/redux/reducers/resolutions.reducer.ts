import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResolutionsResponse } from 'resources/resolutions/resolutions.types';
import { ResolutionsState } from './reducers.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';
import { ResolutionsPending } from '../actions.types';

const initialState = {
  resolutions: [],
  total: 0,
  status: FETCH_STATUS.IDLE,
} as ResolutionsState;

export const resolutionsSlice = createSlice({
  name: 'resolutions',
  initialState,
  reducers: {
    fulfilled: (state, action: PayloadAction<ResolutionsResponse>) => ({ ...state, ...action.payload, status: FETCH_STATUS.FULFILLED }),
    pending: (state, action: PayloadAction<ResolutionsPending>) => ({ ...state, ...action.payload, status: FETCH_STATUS.LOADING }),
    failed: (state) => ({ ...state, status: FETCH_STATUS.FAILED }),
  },
});

export const selectResolutions = (state: RootState) => state.resolutions;
export const resolutionsReducer = resolutionsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { resolutions } from '../actions';
import { ResolutionsState } from './reducers.types';
import { RootState } from '../store';
import { FETCH_STATUS } from './constants';

const initialState = {
  resolutions: [],
  total: 0,
  status: FETCH_STATUS.IDLE,
} as ResolutionsState;

export const resolutionsSlice = createSlice({
  name: 'resolutions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resolutions.fulfilled, (state, { payload }) => ({
        ...state, resolutions: payload.resolutions, total: payload.total, status: FETCH_STATUS.FULFILLED,
      }));
    builder
      .addCase(resolutions.pending, (state) => ({ ...state, responseStatus: FETCH_STATUS.LOADING }));
    builder
      .addCase(resolutions.failed, (state) => ({ ...state, responseStatus: FETCH_STATUS.FAILED }));
  },
});

export const selectResolutions = (state: RootState) => state.resolutions;

export const resolutionsReducer = resolutionsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { resolutions } from '../actions';
import { ResolutionsState } from './reducers.types';
import { RootState } from '../store';

const initialState = {
  resolutions: [],
  total: 0,
  status: 'idle',
} as ResolutionsState;

export const resolutionsSlice = createSlice({
  name: 'resolutions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(resolutions.fulfilled, (state, { payload }) => {
        state.resolutions = payload.resolutions;
        state.total = payload.total;
        state.status = 'fulfilled';
      });

    builder
      .addCase(resolutions.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(resolutions.failed, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectResolutions = (state: RootState) => state.resolutions;

export const resolutionsReducer = resolutionsSlice.reducer;

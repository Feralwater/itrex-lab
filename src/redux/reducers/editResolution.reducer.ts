import { createSlice } from '@reduxjs/toolkit';
import { editResolution } from '../actions';
import { RootState } from '../store';
import { EditResolutionState } from './reducers.types';

const initialState = {
  resolutionID: '',
  status: 'idle',
} as EditResolutionState;

export const editResolutionSlice = createSlice({
  name: 'editResolution',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editResolution.fulfilled, (state, { payload }) => {
        state.resolutionID = payload.resolutionID;
        state.status = 'fulfilled';
      });
    builder
      .addCase(editResolution.pending, (state) => {
        state.status = 'loading';
      });
    builder
      .addCase(editResolution.failed, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectedEditResolution = (state: RootState) => state.editResolution;

export const editResolutionReducer = editResolutionSlice.reducer;
